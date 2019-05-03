import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Injectable()
export class AuthenticationGuardService implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.authenticationService.logout()
      return false
    }
    return true
  }
}