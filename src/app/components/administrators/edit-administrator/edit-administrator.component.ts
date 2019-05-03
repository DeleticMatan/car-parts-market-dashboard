import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'


@Component({
  selector: 'app-edit-administrator',
  templateUrl: './edit-administrator.component.html',
  styleUrls: ['./edit-administrator.component.css']
})
export class EditAdministratorComponent implements OnInit {
  public administrator: User = new User
  public hidePassword: boolean = true
  public showSpinner: boolean = false
  public editAdministratorForm: FormGroup
  public name: FormControl = new FormControl('', [Validators.required, Validators.maxLength(50)])
  public address: FormControl = new FormControl('', [Validators.required])
  public city: FormControl = new FormControl('', [Validators.required])
  public phone: FormControl = new FormControl('', [Validators.required])
  public phone2: FormControl = new FormControl()
  public email: FormControl = new FormControl('', [Validators.required, Validators.email])
  public password: FormControl = new FormControl('', [Validators.min(8)])
  @Input() diameter: number
  @Input() checked: boolean
  @Input() disabled: boolean
  @Output() onAdministratorUpdated: EventEmitter<any> = new EventEmitter()

  constructor(
    private userService: UserService,
    public helperService: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initValidation()
    this.getAdministrator(this.data.administratorId)
  }

  public hasError(controlName: string, errorName: string) {
    return this.editAdministratorForm.controls[controlName].hasError(errorName)
  }

  getAdministrator(administratorId) {
    this.userService.getUser(administratorId).subscribe(data => {
      this.administrator = data.users[0]
      this.administrator.password = ''
    }, (error) => {
      console.log('Error', error)
    })
  }

  initValidation() {
    this.editAdministratorForm = new FormGroup({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      phone2: this.phone2,
      email: this.email,
      password: this.password
    })
  }

  editAdministrator() {
    if (this.editAdministratorForm.valid) {
      this.executeAdministratorUpdate()
    }
  }

  activeChanged() {
    this.administrator.active = !this.administrator.active
  }

  executeAdministratorUpdate() {
    this.showSpinner = true
    this.userService.updateUser(this.administrator).subscribe(data => {
      this.onAdministratorUpdated.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Neuspešna iyzena administratora ', 'OK')
    })
  }

}
