import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public user: User = new User
  public hidePassword: boolean = true
  public showSpinner: boolean = false
  public editUserForm: FormGroup
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
  @Output() onUserUpdated: EventEmitter<any> = new EventEmitter()

  constructor(
    private userService: UserService,
    public helperService: HelperService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initValidation()
    this.getUser(this.data.userId)
  }

  public hasError(controlName: string, errorName: string) {
    return this.editUserForm.controls[controlName].hasError(errorName)
  }

  getUser(userId) {
    this.userService.getUser(userId).subscribe(data => {
      this.user = data.users[0]
      this.user.password = ''
    }, (error) => {
      console.log('Error', error)
    })
  }

  initValidation() {
    this.editUserForm = new FormGroup({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      phone2: this.phone2,
      email: this.email,
      password: this.password
    })
  }

  editUser() {
    if (this.editUserForm.valid) {
      this.executeUserUpdate()
    }
  }

  activeChanged() {
    this.user.active = !this.user.active
  }

  executeUserUpdate() {
    this.showSpinner = true
    this.userService.updateUser(this.user).subscribe(data => {
      this.onUserUpdated.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Izmena korisnika neuspešna', 'OK')
    })
  }

}
