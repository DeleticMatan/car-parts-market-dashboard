import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { MAT_DIALOG_DATA } from "@angular/material"
import { Inject } from "@angular/core"
import { Ad } from "../../../models/ad"
import { User } from "../../../models/user"
import { AdBrand } from "../../../models/adBrand"
import { AdCategory } from "../../../models/adCategory"
import { AdService } from "../../../shared/services/ad.service"
import { UserService } from "../../../shared/services/user.service"
import { HelperService } from "../../../shared/services/helper.service"
import {
  AD_TYPES,
  AD_VEHICLE_TYPES,
  AD_PART_CATEGORIES,
  AD_EQUIPMENT_CATEGORIES,
  AD_BRANDS
} from "../../../shared/constants/ad.constants"
import {
  CONDITION,
  CITIES,
  YEAR,
  FOLDER_ADS
} from "../../../shared/constants/general.constants"

@Component({
  selector: "app-add-ad",
  templateUrl: "./add-ad.component.html",
  styleUrls: ["./add-ad.component.css"]
})
export class AddAdComponent implements OnInit {
  public ad: Ad = new Ad()
  public user: User
  public hidePassword: boolean = true
  public emailTaken: boolean = false
  public showSpinner: boolean = false
  public isLinear: boolean = true
  public stepControlAd: FormGroup
  public stepControlUser: FormGroup
  public stepControlSettings: FormGroup
  public expires: FormControl = new FormControl("", [Validators.required])
  public adType: FormControl = new FormControl()
  public type: FormControl = new FormControl("", [Validators.required])
  public brand: FormControl = new FormControl()
  public model: FormControl = new FormControl()
  public label: FormControl = new FormControl()
  public category: FormControl = new FormControl("", [Validators.required])
  public subcategory: FormControl = new FormControl()
  public year: FormControl = new FormControl()
  public yearTo: FormControl = new FormControl()
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
  public brandList: AdBrand[] = AD_BRANDS
  public modelList: string[] = []
  public categoryList: AdCategory[] = AD_PART_CATEGORIES
  public subcategoryList: string[] = []
  public typeList: string[] = AD_TYPES
  public vehicleTypeList: string[] = AD_VEHICLE_TYPES
  public conditionList: string[] = CONDITION
  public cityList: string[] = CITIES
  public yearList: string[] = YEAR
  public userId: string = null
  public selectedFiles: any[] = [null, null, null, null, null, null]
  public imgUrl: any[] = [null, null, null, null, null, null]
  public indexesFirst: number[] = [0, 1, 2]
  public indexesSecond: number[] = [3, 4, 5]

  @Input() diameter: number
  @Input() checked: boolean
  @Input() disabled: boolean
  @Output() onAdCreated: EventEmitter<any> = new EventEmitter()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adService: AdService,
    private userService: UserService,
    public helperService: HelperService
  ) {}

  ngOnInit() {
    this.ad.active = this.data.active
    this.userId = this.data.userId
    if (this.userId !== null) {
      this.getUser()
    }
    this.ad.expires = this.adService.adExpires
    this.ad.highlight = false
    this.ad.condition = this.conditionList[0]
    this.ad.adType = this.typeList[0]
    this.ad.type = this.vehicleTypeList[0]
    this.initValidation()
  }

  public hasErrorAd(controlName: string, errorName: string) {
    return this.stepControlAd.controls[controlName].hasError(errorName)
  }

  public hasErrorUser(controlName: string, errorName: string) {
    return this.stepControlUser.controls[controlName].hasError(errorName)
  }

  public hasErrorSettings(controlName: string, errorName: string) {
    return this.stepControlSettings.controls[controlName].hasError(errorName)
  }

  initValidation() {
    this.stepControlAd = new FormGroup({
      adType: this.adType,
      type: this.type,
      brand: this.brand,
      model: this.model,
      label: this.label,
      category: this.category,
      subcategory: this.subcategory,
      year: this.year,
      yearTo: this.yearTo,
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

  getUser() {
    this.userService.getUser(this.userId).subscribe(
      data => {
        this.user = data.users[0]
        this.ad.name = this.user.name
        this.ad.email = this.user.email
        this.ad.phone = this.user.phone
        this.ad.phone2 = this.user.phone2
        this.ad.city = this.user.city
      },
      error => {
        console.log("Error", error)
      }
    )
  }

  saveAd() {
    if (
      this.stepControlAd.valid &&
      this.stepControlUser.valid &&
      this.stepControlSettings.valid
    ) {
      this.executeAdCreation()
    }
  }

  setAdType(adType: string) {
    this.ad.adType = adType
    this.categoryList =
      this.ad.adType === this.typeList[0]
        ? AD_PART_CATEGORIES
        : AD_EQUIPMENT_CATEGORIES
    this.subcategoryList = []
  }

  setCondition(condition: string) {
    this.ad.condition = condition
  }

  setModels(event: any) {
    this.modelList = this.brandList.find(brand => {
      return brand.name === event.value
    }).models
  }

  setSubcategories(event: any) {
    this.subcategoryList = this.categoryList.find(category => {
      return category.name === event.value
    }).subcategories
  }

  highlightChanged() {
    this.ad.highlight = !this.ad.highlight
  }

  activeChanged() {
    this.ad.active = !this.ad.active
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

  executeAdCreation() {
    this.showSpinner = true
    this.adService.createAd(this.ad, this.userId).subscribe(
      data => {
        this.executeFileUpload(this.selectedFiles, data.createAd.id)
        this.onAdCreated.emit(data.createAd)
        this.showSpinner = false
      },
      error => {
        this.showSpinner = false
        this.helperService.openSnackBar("Unos oglasa neuspešan", "OK")
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
        this.adService.uploadFile(file, publicId, FOLDER_ADS).subscribe(
          data => {},
          error => {
            console.log(error)
          }
        )
      }
    })
  }
}
