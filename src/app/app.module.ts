import * as $ from 'jquery'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { LocationStrategy, PathLocationStrategy } from '@angular/common'
import { MatDialogModule } from '@angular/material'
import { AppRoutes } from './app.routing'
import { AppComponent } from './app.component'

import { FlexLayoutModule } from '@angular/flex-layout'
import { FullComponent } from './layouts/full/full.component'
import { AppHeaderComponent } from './layouts/full/header/header.component'
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DemoMaterialModule } from './demo-material-module'
import { SharedModule } from './shared/shared.module'
import { GraphQLModule } from './graphql.module'
import { JwtModule } from '@auth0/angular-jwt'

import { SpinnerComponent } from './shared/spinner.component'
import { AllAdministratorsComponent } from './components/administrators/all-administrators/all-administrators.component'
import { AddAdministratorComponent } from './components/administrators/add-administrator/add-administrator.component'
import { EditAdministratorComponent } from './components/administrators/edit-administrator/edit-administrator.component'
import { DeleteAdministratorDialogComponent } from './components/administrators/delete-administrator-dialog/delete-administrator-dialog.component'
import { AllUsersComponent } from './components/users/all-users/all-users.component'
import { AddUserComponent } from './components/users/add-user/add-user.component'
import { EditUserComponent } from './components/users/edit-user/edit-user.component'
import { AllAdsComponent } from './components/ads/all-ads/all-ads.component'
import { EditAdComponent } from './components/ads/edit-ad/edit-ad.component'
import { AddAdComponent } from './components/ads/add-ad/add-ad.component'
import { LoginComponent } from './components/login/login.component'
import { ActiveAdministratorsComponent } from './components/administrators/active-administrators/active-administrators.component'
import { ArchivedAdministratorsComponent } from './components/administrators/archived-administrators/archived-administrators.component'
import { ArchiveAdministratorDialogComponent } from './components/administrators/archive-administrator-dialog/archive-administrator-dialog.component'
import { ActivateAdministratorDialogComponent } from './components/administrators/activate-administrator-dialog/activate-administrator-dialog.component'
import { ActivateUserDialogComponent } from './components/users/activate-user-dialog/activate-user-dialog.component'
import { ActiveUsersComponent } from './components/users/active-users/active-users.component'
import { ArchivedUsersComponent } from './components/users/archived-users/archived-users.component'
import { DeleteUserDialogComponent } from './components/users/delete-user-dialog/delete-user-dialog.component'
import { ArchiveUserDialogComponent } from './components/users/archive-user-dialog/archive-user-dialog.component'
import { UsersResolver } from './shared/resolvers/users.resolver'
import { ActiveAdsComponent } from './components/ads/active-ads/active-ads.component'
import { ArchivedAdsComponent } from './components/ads/archived-ads/archived-ads.component'
import { ActivateAdDialogComponent } from './components/ads/activate-ad-dialog/activate-ad-dialog.component'
import { ArchiveAdDialogComponent } from './components/ads/archive-ad-dialog/archive-ad-dialog.component'
import { DeleteAdDialogComponent } from './components/ads/delete-ad-dialog/delete-ad-dialog.component'
import { AuthenticationGuardService } from './shared/guards/authentication-guard.service'
import { RoleGuardService } from './shared/guards/role-guard.service'
import { ActivateRimDialogComponent } from './components/rims/activate-rim-dialog/activate-rim-dialog.component'
import { ActiveRimsComponent } from './components/rims/active-rims/active-rims.component'
import { AddRimComponent } from './components/rims/add-rim/add-rim.component'
import { AllRimsComponent } from './components/rims/all-rims/all-rims.component'
import { ArchiveRimDialogComponent } from './components/rims/archive-rim-dialog/archive-rim-dialog.component'
import { ArchivedRimsComponent } from './components/rims/archived-rims/archived-rims.component'
import { DeleteRimDialogComponent } from './components/rims/delete-rim-dialog/delete-rim-dialog.component'
import { EditRimComponent } from './components/rims/edit-rim/edit-rim.component'
import { ActivateTireDialogComponent } from './components/tires/activate-tire-dialog/activate-tire-dialog.component'
import { ActiveTiresComponent } from './components/tires/active-tires/active-tires.component'
import { AddTireComponent } from './components/tires/add-tire/add-tire.component'
import { AllTiresComponent } from './components/tires/all-tires/all-tires.component'
import { ArchiveTireDialogComponent } from './components/tires/archive-tire-dialog/archive-tire-dialog.component'
import { ArchivedTiresComponent } from './components/tires/archived-tires/archived-tires.component'
import { DeleteTireDialogComponent } from './components/tires/delete-tire-dialog/delete-tire-dialog.component'
import { EditTireComponent } from './components/tires/edit-tire/edit-tire.component';
import { AllBannersComponent } from './components/banners/all-banners/all-banners.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component'

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AllUsersComponent,
    AllAdsComponent,
    AddUserComponent,
    EditUserComponent,
    AllAdministratorsComponent,
    AddAdministratorComponent,
    EditAdministratorComponent,
    EditAdComponent,
    AddAdComponent,
    LoginComponent,
    DeleteAdministratorDialogComponent,
    ActiveAdministratorsComponent,
    ArchivedAdministratorsComponent,
    ArchiveAdministratorDialogComponent,
    ActivateAdministratorDialogComponent,
    ActivateUserDialogComponent,
    ActiveUsersComponent,
    ArchivedUsersComponent,
    DeleteUserDialogComponent,
    ArchiveUserDialogComponent,
    ActiveAdsComponent,
    ArchivedAdsComponent,
    ActivateAdDialogComponent,
    ArchiveAdDialogComponent,
    DeleteAdDialogComponent,
    ActivateRimDialogComponent,
    ActiveRimsComponent,
    AddRimComponent,
    AllRimsComponent,
    ArchiveRimDialogComponent,
    ArchivedRimsComponent,
    DeleteRimDialogComponent,
    EditRimComponent,
    ActivateTireDialogComponent,
    ActiveTiresComponent,
    AddTireComponent,
    AllTiresComponent,
    ArchiveTireDialogComponent,
    ArchivedTiresComponent,
    DeleteTireDialogComponent,
    EditTireComponent,
    AllBannersComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes),
    MatDialogModule,
    GraphQLModule,
    JwtModule.forRoot({})
  ],
  entryComponents: [
    AddUserComponent,
    EditUserComponent,
    AddAdministratorComponent,
    EditAdministratorComponent,
    AddAdComponent,
    EditAdComponent,
    AddTireComponent,
    EditTireComponent,
    AddRimComponent,
    EditRimComponent,
    ActivateAdministratorDialogComponent,
    ArchiveAdministratorDialogComponent,
    DeleteAdministratorDialogComponent,
    ActivateUserDialogComponent,
    ArchiveUserDialogComponent,
    DeleteUserDialogComponent,
    ActivateAdDialogComponent,
    ArchiveAdDialogComponent,
    DeleteAdDialogComponent,
    ActivateRimDialogComponent,
    ArchiveRimDialogComponent,
    DeleteRimDialogComponent,
    ActivateTireDialogComponent,
    ArchiveTireDialogComponent,
    DeleteTireDialogComponent
  ],
  providers: [
    UsersResolver,
    AuthenticationGuardService,
    RoleGuardService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }