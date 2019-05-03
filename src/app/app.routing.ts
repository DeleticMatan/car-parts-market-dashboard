import { Routes, CanActivate } from '@angular/router'

import { FullComponent } from './layouts/full/full.component'
import { LoginComponent } from './components/login/login.component'
import { AllAdministratorsComponent } from './components/administrators/all-administrators/all-administrators.component'
import { AllUsersComponent } from './components/users/all-users/all-users.component'
import { UserDetailsComponent } from './components/users/user-details/user-details.component'
import { AllAdsComponent } from './components/ads/all-ads/all-ads.component'
import { AllRimsComponent } from './components/rims/all-rims/all-rims.component'
import { AllTiresComponent } from './components/tires/all-tires/all-tires.component'
import { AllBannersComponent } from './components/banners/all-banners/all-banners.component'
import { AuthenticationGuardService } from './shared/guards/authentication-guard.service'
import { RoleGuardService } from './shared/guards/role-guard.service'

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'administrators',
        component: AllAdministratorsComponent,
        canActivate: [RoleGuardService]
      },
      {
        path: 'users',
        component: AllUsersComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'user-details',
        component: UserDetailsComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'ads',
        component: AllAdsComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'rims',
        component: AllRimsComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'tires',
        component: AllTiresComponent,
        canActivate: [AuthenticationGuardService]
      },
      {
        path: 'banners',
        component: AllBannersComponent,
        canActivate: [AuthenticationGuardService]
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
