import { Injectable } from "@angular/core"
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router'
import { Login } from '../mutations/user.mutations'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private apollo: Apollo,
    private router: Router,
    public jwtHelper: JwtHelperService) { }

  public login(email: string, password: string) {
    return this.apollo.mutate({
      mutation: Login,
      variables: {
        email: email,
        password: password
      }
    }).pipe(
      map(result => result.data)
    )
  }

  public logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token')
    return token !== null
  }

  public isSuperAdmin(): boolean {
    const access = localStorage.getItem('access')
    return access && access === '2'
  }
}
