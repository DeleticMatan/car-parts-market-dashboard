import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { GetTires, GetTiresDetails, GetArchivedTires, GetArchivedTiresDetails, GetTire } from '../queries/tire.queries'
import { CreateTire, UpdateTire, DeleteTire, ArchiveTire, ActivateTire } from '../mutations/tire.mutations'
import { Tire } from '../../models/tire'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class TireService {
  public tires: Tire[]
  public archivedTires: Tire[]
  public tireExpires: number = 30
  public modelSelect: string[] = ['206', '207', '406', 'Niva']

  constructor(
    private apollo: Apollo) { }

  getTires(): Observable<any> {
    return this.apollo.query({
      query: GetTires,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getTiresDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetTiresDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedTires(): Observable<any> {
    return this.apollo.query({
      query: GetArchivedTires,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedTiresDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetArchivedTiresDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getTire(tireId): Observable<any> {
    return this.apollo.query({
      query: GetTire,
      variables: {
        id: tireId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  createTire(tire: Tire, userId: string) {
    return this.apollo.mutate({
      mutation: CreateTire,
      variables: {
        userId: userId,
        active: tire.active,
        highlight: tire.highlight,
        type: tire.type,
        diameter: tire.diameter,
        width: tire.width,
        height: tire.height,
        brand: tire.brand,
        condition: tire.condition,
        price: tire.price,
        text: tire.text,
        phone: tire.phone,
        phone2: tire.phone2,
        name: tire.name,
        email: tire.email,
        city: tire.city,
        expires: tire.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  updateTire(tire: Tire) {
    return this.apollo.mutate({
      mutation: UpdateTire,
      variables: {
        id: tire.id,
        active: tire.active,
        highlight: tire.highlight,
        type: tire.type,
        diameter: tire.diameter,
        width: tire.width,
        height: tire.height,
        brand: tire.brand,
        condition: tire.condition,
        price: tire.price,
        text: tire.text,
        phone: tire.phone,
        phone2: tire.phone2,
        name: tire.name,
        email: tire.email,
        city: tire.city,
        expires: tire.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  deleteTire(id: string) {
    return this.apollo.mutate({
      mutation: DeleteTire,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  archiveTire(id: string) {
    return this.apollo.mutate({
      mutation: ArchiveTire,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  activateTire(id: string) {
    return this.apollo.mutate({
      mutation: ActivateTire,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

}

