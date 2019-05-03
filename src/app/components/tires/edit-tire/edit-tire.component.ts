import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { MAT_DIALOG_DATA } from "@angular/material"
import { Inject } from "@angular/core"
import { Tire } from "../../../models/tire"
import { TireService } from "../../../shared/services/tire.service"
import { AdService } from "../../../shared/services/ad.service"
import { HelperService } from "../../../shared/services/helper.service"
import {
  TIRE_TYPE,
  TIRE_WIDTH,
  TIRE_HEIGHT,
  TIRE_DIAMETER,
  TIRE_BRANDS
} from "../../../shared/constants/tire.constants"
import {
  CONDITION,
  CITIES,
  IMAGES_ROOT,
  FOLDER_TIRES
} from "../../../shared/constants/general.constants"

@Component({
  selector: "app-edit-tire",
  templateUrl: "./edit-tire.component.html",
  styleUrls: ["./edit-tire.component.css"]
})
export class EditTireComponent implements OnInit {
  public tire: Tire = new Tire()
  public hidePassword: boolean = true
  public emailTaken: boolean = false
  public showSpinner: boolean = false
  public isLinear: boolean = true
  public stepControlTire: FormGroup
  public stepControlUser: FormGroup
  public stepControlSettings: FormGroup
  public expires: FormControl = new FormControl("", [Validators.required])
  public type: FormControl = new FormControl("", [Validators.required])
  public tireDiameter: FormControl = new FormControl()
  public width: FormControl = new FormControl()
  public height: FormControl = new FormControl()
  public brand: FormControl = new FormControl()
  public price: FormControl = new FormControl("", [Validators.required])
  public text: FormControl = new FormControl()
  public phone: FormControl = new FormControl("", [Validators.required])
  public phone2: FormControl = new FormControl()
  public name: FormControl = new FormControl()
  public email: FormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ])
  public city: FormControl = new FormControl("", [Validators.required])
  public conditionList: string[] = CONDITION
  public cityList: string[] = CITIES
  public typeList: string[] = TIRE_TYPE
  public widthList: string[] = TIRE_WIDTH
  public heightList: string[] = TIRE_HEIGHT
  public diameterList: string[] = TIRE_DIAMETER
  public brandList: string[] = TIRE_BRANDS
  public selectedFiles: any[] = [null, null, null, null, null, null]
  public imgUrl: any[] = [null, null, null, null, null, null]
  public indexesFirst: number[] = [0, 1, 2]
  public indexesSecond: number[] = [3, 4, 5]

  @Input() diameter: number
  @Input() checked: boolean
  @Input() disabled: boolean
  @Output() onTireUpdated: EventEmitter<any> = new EventEmitter()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tireService: TireService,
    private adService: AdService,
    public helperService: HelperService
  ) {}

  ngOnInit() {
    this.initValidation()
    this.getTire(this.data.tireId)
  }

  public hasErrorTire(controlName: string, errorName: string) {
    return this.stepControlTire.controls[controlName].hasError(errorName)
  }

  public hasErrorUser(controlName: string, errorName: string) {
    return this.stepControlUser.controls[controlName].hasError(errorName)
  }

  public hasErrorSettings(controlName: string, errorName: string) {
    return this.stepControlSettings.controls[controlName].hasError(errorName)
  }

  initValidation() {
    this.stepControlTire = new FormGroup({
      type: this.type,
      tireDiameter: this.tireDiameter,
      width: this.width,
      height: this.height,
      brand: this.brand,
      price: this.price
    })

    this.stepControlUser = new FormGroup({
      phone: this.phone,
      phone2: this.phone2,
      name: this.name,
      email: this.email,
      city: this.city
    })

    this.stepControlSettings = new FormGroup({
      expires: this.expires,
      text: this.text
    })
  }

  getTire(tireId) {
    this.imgUrl = [
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-1`,
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-2`,
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-3`,
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-4`,
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-5`,
      `${IMAGES_ROOT}/${FOLDER_TIRES}/${tireId}-6`
    ]
    this.tireService.getTire(tireId).subscribe(
      data => {
        this.tire = data.tires[0]
      },
      error => {
        console.log("Error", error)
      }
    )
  }

  editTire() {
    if (
      this.stepControlTire.valid &&
      this.stepControlUser.valid &&
      this.stepControlSettings.valid
    ) {
      this.executeTireUpdate()
    }
  }

  setCondition(condition: string) {
    this.tire.condition = condition
  }

  highlightChanged() {
    this.tire.highlight = !this.tire.highlight
  }

  activeChanged() {
    this.tire.active = !this.tire.active
  }

  fileInputClick(index: string) {
    let element: HTMLElement = document.getElementById(index) as HTMLElement
    element.click()
  }

  onFileSelected(event: any, index: number) {
    if (event.target.files[0].length === 0) return

    let mimeType = event.target.files[0].type
    if (mimeType.match(/image\/*/) == null) {
      this.helperService.openSnackBar("Nije slika", "OK")
      return
    }

    if (event.target.files[0].size > 2000000) {
      this.helperService.openSnackBar(
        "Slika mora zauzimati ispod 2mb prostora",
        "OK"
      )
      return
    }

    this.selectedFiles[index] = event.target.files[0]

    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = _event => {
      this.imgUrl[index] = reader.result
    }
  }

  executeTireUpdate() {
    let files: any[] = []
    this.showSpinner = true
    this.tireService.updateTire(this.tire).subscribe(
      data => {
        this.executeFileUpload(this.selectedFiles, data.updateTire.id)
        this.onTireUpdated.emit(data.updateTire)
        this.showSpinner = false
      },
      error => {
        this.showSpinner = false
        this.helperService.openSnackBar("Izmena oglasa neuspešna", "OK")
      }
    )
  }

  executeFileUpload(files: any[], id: string) {
    let i = 0
    let publicId = ""
    files.forEach(file => {
      i++
      publicId = `${id}-${i}`
      if (file !== null) {
        this.adService.uploadFile(file, publicId, FOLDER_TIRES).subscribe(
          data => {},
          error => {
            console.log(error)
          }
        )
      }
    })
  }
}
