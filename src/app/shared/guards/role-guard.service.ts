import { Injectable } from '@angular/core'
import { Router, CanActivate } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service'

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public router: Router) { }
  canActivate(): boolean {
    if (!this.authenticationService.isSuperAdmin()) {
      this.authenticationService.logout()
      return false
    }
    return true
  }
}