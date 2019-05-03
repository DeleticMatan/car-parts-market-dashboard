import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAdministrators, GetArchivedAdministrators } from '../queries/user.queries'
import { User } from '../../models/user'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  public administrators: User[]
  public archivedAdministrators: User[]


  constructor(private apollo: Apollo) { }

  getAdministrators(): Observable<any> {
    return this.apollo.query({
      query: GetAdministrators
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedAdministrators(): Observable<any> {
    return this.apollo.query({
      query: GetArchivedAdministrators
    }).pipe(
      map(result => result.data)
    )
  }

}

