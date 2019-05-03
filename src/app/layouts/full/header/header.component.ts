import { Component } from '@angular/core'
import { AuthenticationService } from '../../../shared/services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent {

  constructor(public authenticationService: AuthenticationService) { }

  public logout() {
    this.authenticationService.logout()
  }
}
