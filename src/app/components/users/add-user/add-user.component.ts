import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public user: User = new User
  public hidePassword: boolean = true
  public emailTaken: boolean = false
  public showSpinner: boolean = false
  public addUserForm: FormGroup
  public name: FormControl = new FormControl('', [Validators.required, Validators.maxLength(50)])
  public address: FormControl = new FormControl('', [Validators.required])
  public city: FormControl = new FormControl('', [Validators.required])
  public phone: FormControl = new FormControl('', [Validators.required])
  public phone2: FormControl = new FormControl()
  public email: FormControl = new FormControl('', [Validators.required, Validators.email])
  public password: FormControl = new FormControl('', [Validators.required, Validators.min(8)])
  @Input() diameter: number
  @Input() checked: boolean
  @Input() disabled: boolean
  @Output() onUserCreated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
    this.user.active = this.data.active
    this.user.access = 0
    this.initValidation()
  }

  public hasError(controlName: string, errorName: string) {
    return this.addUserForm.controls[controlName].hasError(errorName)
  }

  initValidation() {
    this.addUserForm = new FormGroup({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      phone2: this.phone2,
      email: this.email,
      password: this.password
    })
  }

  saveUser() {
    if (this.addUserForm.valid) {
      this.executeUserCreation()
    }
  }

  activeChanged() {
    this.user.active = !this.user.active
  }

  executeUserCreation() {
    this.showSpinner = true
    this.userService.createUser(this.user).subscribe(data => {
      this.onUserCreated.emit(data.createUser.user)
      this.showSpinner = false
    }, (error) => {
      this.emailTaken = true
      this.showSpinner = false
      this.helperService.openSnackBar('Ovaj e-mail je zauzet', 'OK')
    })
  }

}
