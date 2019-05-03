import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core'
import { MediaMatcher } from '@angular/cdk/layout'
import { MenuItems } from '../../../shared/menu-items/menu-items'
import { AuthenticationService } from '../../../shared/services/authentication.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList
  public access: string
  private _mobileQueryListener: () => void

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    public authenticationService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
    this.access = localStorage.getItem('access')
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }
}
