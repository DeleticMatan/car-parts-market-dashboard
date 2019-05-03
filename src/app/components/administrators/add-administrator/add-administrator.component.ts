import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-add-administrator',
  templateUrl: './add-administrator.component.html',
  styleUrls: ['./add-administrator.component.css']
})
export class AddAdministratorComponent implements OnInit {
  public administrator: User = new User
  public hidePassword: boolean = true
  public emailTaken: boolean = false
  public showSpinner: boolean = false
  public addAdministratorForm: FormGroup
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
  @Output() onAdministratorCreated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
    this.administrator.active = this.data.active
    this.administrator.access = 1
    this.initValidation()
  }

  public hasError(controlName: string, errorName: string) {
    return this.addAdministratorForm.controls[controlName].hasError(errorName)
  }

  initValidation() {
    this.addAdministratorForm = new FormGroup({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      phone2: this.phone2,
      email: this.email,
      password: this.password
    })
  }

  saveAdministrator() {
    if (this.addAdministratorForm.valid) {
      this.executeAdministratorCreation()
    }
  }

  activeChanged() {
    this.administrator.active = !this.administrator.active
  }

  executeAdministratorCreation() {
    this.showSpinner = true
    this.userService.createUser(this.administrator).subscribe(data => {
      this.onAdministratorCreated.emit(data.createUser.user)
      this.showSpinner = false
    }, (error) => {
      this.emailTaken = true
      this.showSpinner = false
      this.helperService.openSnackBar('Ovaj e-mail je zauzet', 'OK')
    })
  }

}
