import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { GetRims, GetRimsDetails, GetArchivedRims, GetArchivedRimsDetails, GetRim } from '../queries/rim.queries'
import { CreateRim, UpdateRim, DeleteRim, ArchiveRim, ActivateRim } from '../mutations/rim.mutations'
import { Rim } from '../../models/rim'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class RimService {
  public rims: Rim[]
  public archivedRims: Rim[]
  public rimExpires: number = 30
  public modelSelect: string[] = ['206', '207', '406', 'Niva']

  constructor(
    private apollo: Apollo) { }

  getRims(): Observable<any> {
    return this.apollo.query({
      query: GetRims,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getRimsDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetRimsDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedRims(): Observable<any> {
    return this.apollo.query({
      query: GetArchivedRims,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedRimsDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetArchivedRimsDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }


  getRim(rimId): Observable<any> {
    return this.apollo.query({
      query: GetRim,
      variables: {
        id: rimId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  createRim(rim: Rim, userId: string) {
    return this.apollo.mutate({
      mutation: CreateRim,
      variables: {
        userId: userId,
        active: rim.active,
        highlight: rim.highlight,
        type: rim.type,
        diameter: rim.diameter,
        width: rim.width,
        holes: rim.holes,
        brand: rim.brand,
        et: rim.et,
        condition: rim.condition,
        price: rim.price,
        text: rim.text,
        phone: rim.phone,
        phone2: rim.phone2,
        name: rim.name,
        email: rim.email,
        city: rim.city,
        expires: rim.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  updateRim(rim: Rim) {
    return this.apollo.mutate({
      mutation: UpdateRim,
      variables: {
        id: rim.id,
        active: rim.active,
        highlight: rim.highlight,
        type: rim.type,
        diameter: rim.diameter,
        width: rim.width,
        holes: rim.holes,
        brand: rim.brand,
        et: rim.et,
        condition: rim.condition,
        price: rim.price,
        text: rim.text,
        phone: rim.phone,
        phone2: rim.phone2,
        name: rim.name,
        email: rim.email,
        city: rim.city,
        expires: rim.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  deleteRim(id: string) {
    return this.apollo.mutate({
      mutation: DeleteRim,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  archiveRim(id: string) {
    return this.apollo.mutate({
      mutation: ArchiveRim,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  activateRim(id: string) {
    return this.apollo.mutate({
      mutation: ActivateRim,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

}

