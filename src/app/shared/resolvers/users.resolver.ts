import { Injectable } from '@angular/core'
import { UserService } from '../services/user.service'
import { Resolve } from '@angular/router'
import { map } from 'rxjs/operators'

@Injectable()
export class UsersResolver implements Resolve<any> {
  constructor(private userService: UserService) { }

  resolve() {
    return this.userService.getUsers()
  }
}