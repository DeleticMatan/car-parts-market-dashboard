import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { GetUsers, GetArchivedUsers, GetUser } from '../queries/user.queries'
import { CreateUser, UpdateUser, DeleteUser, ArchiveUser, ActivateUser } from '../mutations/user.mutations'
import { User } from '../../models/user'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User
  public users: User[]
  public archivedUsers: User[]

  constructor(
    private apollo: Apollo) { }

  getUsers(): Observable<any> {
    return this.apollo.query({
      query: GetUsers
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedUsers(): Observable<any> {
    return this.apollo.query({
      query: GetArchivedUsers,
    }).pipe(
      map(result => result.data)
    )
  }

  getUser(userId): Observable<any> {
    return this.apollo.query({
      query: GetUser,
      variables: {
        id: userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  createUser(user: User) {
    return this.apollo.mutate({
      mutation: CreateUser,
      variables: {
        active: user.active,
        access: user.access,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        phone2: user.phone2,
        address: user.address,
        city: user.city
      }
    }).pipe(
      map(result => result.data)
    )
  }

  updateUser(user: User) {
    return this.apollo.mutate({
      mutation: UpdateUser,
      variables: {
        id: user.id,
        active: user.active,
        access: user.access,
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
        phone2: user.phone2,
        address: user.address,
        city: user.city
      }
    }).pipe(
      map(result => result.data)
    )
  }

  deleteUser(id: string) {
    return this.apollo.mutate({
      mutation: DeleteUser,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  archiveUser(id: string) {
    return this.apollo.mutate({
      mutation: ArchiveUser,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  activateUser(id: string) {
    return this.apollo.mutate({
      mutation: ActivateUser,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }
}

