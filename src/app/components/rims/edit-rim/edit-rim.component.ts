import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { MAT_DIALOG_DATA } from "@angular/material"
import { Inject } from "@angular/core"
import { Rim } from "../../../models/rim"
import { RimService } from "../../../shared/services/rim.service"
import { AdService } from "../../../shared/services/ad.service"
import { HelperService } from "../../../shared/services/helper.service"
import {
  RIM_TYPE,
  RIM_DIAMETER,
  RIM_WIDTH,
  RIM_HOLES,
  RIM_BRANDS
} from "../../../shared/constants/rim.constants"
import {
  CONDITION,
  CITIES,
  IMAGES_ROOT,
  FOLDER_RIMS
} from "../../../shared/constants/general.constants"

@Component({
  selector: "app-edit-rim",
  templateUrl: "./edit-rim.component.html",
  styleUrls: ["./edit-rim.component.css"]
})
export class EditRimComponent implements OnInit {
  public rim: Rim = new Rim()
  public hidePassword: boolean = true
  public emailTaken: boolean = false
  public showSpinner: boolean = false
  public isLinear: boolean = true
  public stepControlRim: FormGroup
  public stepControlUser: FormGroup
  public stepControlSettings: FormGroup
  public expires: FormControl = new FormControl("", [Validators.required])
  public type: FormControl = new FormControl("", [Validators.required])
  public rimDiameter: FormControl = new FormControl()
  public width: FormControl = new FormControl()
  public holes: FormControl = new FormControl()
  public et: FormControl = new FormControl()
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
  public typeList: string[] = RIM_TYPE
  public diameterList: string[] = RIM_DIAMETER
  public widthList: string[] = RIM_WIDTH
  public holeList: string[] = RIM_HOLES
  public brandList: string[] = RIM_BRANDS
  public selectedFiles: any[] = [null, null, null, null, null, null]
  public imgUrl: any[] = [null, null, null, null, null, null]
  public indexesFirst: number[] = [0, 1, 2]
  public indexesSecond: number[] = [3, 4, 5]

  @Input() diameter: number
  @Input() checked: boolean
  @Input() disabled: boolean
  @Output() onRimUpdated: EventEmitter<any> = new EventEmitter()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private rimService: RimService,
    private adService: AdService,
    public helperService: HelperService
  ) {}

  ngOnInit() {
    this.initValidation()
    this.getRim(this.data.rimId)
  }

  public hasErrorRim(controlName: string, errorName: string) {
    return this.stepControlRim.controls[controlName].hasError(errorName)
  }

  public hasErrorUser(controlName: string, errorName: string) {
    return this.stepControlUser.controls[controlName].hasError(errorName)
  }

  public hasErrorSettings(controlName: string, errorName: string) {
    return this.stepControlSettings.controls[controlName].hasError(errorName)
  }

  initValidation() {
    this.stepControlRim = new FormGroup({
      type: this.type,
      rimDiameter: this.rimDiameter,
      width: this.width,
      holes: this.holes,
      et: this.et,
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

  getRim(rimId) {
    this.imgUrl = [
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-1`,
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-2`,
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-3`,
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-4`,
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-5`,
      `${IMAGES_ROOT}/${FOLDER_RIMS}/${rimId}-6`
    ]
    this.rimService.getRim(rimId).subscribe(
      data => {
        this.rim = data.rims[0]
      },
      error => {
        console.log("Error", error)
      }
    )
  }

  editRim() {
    if (
      this.stepControlRim.valid &&
      this.stepControlUser.valid &&
      this.stepControlSettings.valid
    ) {
      this.executeRimUpdate()
    }
  }

  setCondition(condition: string) {
    this.rim.condition = condition
  }

  highlightChanged() {
    this.rim.highlight = !this.rim.highlight
  }

  activeChanged() {
    this.rim.active = !this.rim.active
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

  executeRimUpdate() {
    let files: any[] = []
    this.showSpinner = true
    this.rimService.updateRim(this.rim).subscribe(
      data => {
        this.executeFileUpload(this.selectedFiles, data.updateRim.id)
        this.onRimUpdated.emit(data.updateRim)
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
        this.adService.uploadFile(file, publicId, FOLDER_RIMS).subscribe(
          data => {},
          error => {
            console.log(error)
          }
        )
      }
    })
  }
}
