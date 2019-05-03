import { ChangeDetectorRef, Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MediaMatcher } from '@angular/cdk/layout'
import { AuthenticationService } from '../../shared/services/authentication.service'
import { HelperService } from '../../shared/services/helper.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private _mobileQueryListener: () => void
  public mobileQuery: MediaQueryList
  public isLinear: boolean = true
  public showSpinner: boolean = false
  public emailFormGroup: FormGroup
  public passwordFormGroup: FormGroup
  public email: string = ''
  public password: string = ''

  @ViewChild("emailInput") emailInput: ElementRef;
  @ViewChild("passwordInput") passwordInput: ElementRef;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private _formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public helperService: HelperService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnInit() {
    this.emailFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.passwordFormGroup = this._formBuilder.group({
      password: ['', Validators.required]
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emailInput.nativeElement.focus()
    }, 500)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public hasErrorEmail(controlName: string, errorName: string) {
    return this.emailFormGroup.controls[controlName].hasError(errorName)
  }

  public hasErrorPassword(controlName: string, errorName: string) {
    return this.passwordFormGroup.controls[controlName].hasError(errorName)
  }

  public login() {
    this.showSpinner = true
    this.authenticationService.login(this.email, this.password).subscribe(data => {
      localStorage.setItem('token', data.adminLogin.token)
      localStorage.setItem('access', data.adminLogin.user.access)
      this.showSpinner = false
      if (data.adminLogin.user.access === 2) {
        this.router.navigateByUrl('/administrators')
      } else {
        this.router.navigateByUrl('/users')
      }
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Pogrešni kredencijali', 'OK')
    })
  }

}
