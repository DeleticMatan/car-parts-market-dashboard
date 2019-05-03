import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { GetAds, GetAdsDetails, GetArchivedAds, GetArchivedAdsDetails, GetAd } from '../queries/ad.queries'
import { CreateAd, UpdateAd, DeleteAd, ArchiveAd, ActivateAd, UploadFile } from '../mutations/ad.mutations'
import { Ad } from '../../models/ad'
import { map } from 'rxjs/operators'
import { Apollo } from 'apollo-angular'

@Injectable({
  providedIn: 'root'
})
export class AdService {
  public ads: Ad[]
  public archivedAds: Ad[]
  public adExpires: number = 30
  public modelSelect: string[] = ['206', '207', '406', 'Niva']

  constructor(
    private apollo: Apollo) { }

  getAds(): Observable<any> {
    return this.apollo.query({
      query: GetAds,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getAdsDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetAdsDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedAds(): Observable<any> {
    return this.apollo.query({
      query: GetArchivedAds,
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getArchivedAdsDetails(userId: string): Observable<any> {
    return this.apollo.query({
      query: GetArchivedAdsDetails,
      variables: {
        userId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  getAd(adId): Observable<any> {
    return this.apollo.query({
      query: GetAd,
      variables: {
        id: adId
      },
      fetchPolicy: 'no-cache'
    }).pipe(
      map(result => result.data)
    )
  }

  createAd(ad: Ad, userId: string) {
    return this.apollo.mutate({
      mutation: CreateAd,
      variables: {
        userId: userId,
        active: ad.active,
        highlight: ad.highlight,
        adType: ad.adType,
        type: ad.type,
        brand: ad.brand,
        model: ad.model,
        label: ad.label,
        category: ad.category,
        subcategory: ad.subcategory,
        condition: ad.condition,
        year: ad.year,
        yearTo: ad.yearTo,
        price: ad.price,
        text: ad.text,
        phone: ad.phone,
        phone2: ad.phone2,
        name: ad.name,
        email: ad.email,
        city: ad.city,
        expires: ad.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  updateAd(ad: Ad) {
    return this.apollo.mutate({
      mutation: UpdateAd,
      variables: {
        id: ad.id,
        active: ad.active,
        highlight: ad.highlight,
        adType: ad.adType,
        type: ad.type,
        brand: ad.brand,
        model: ad.model,
        label: ad.label,
        category: ad.category,
        subcategory: ad.subcategory,
        condition: ad.condition,
        year: ad.year,
        yearTo: ad.yearTo,
        price: ad.price,
        text: ad.text,
        phone: ad.phone,
        phone2: ad.phone2,
        name: ad.name,
        email: ad.email,
        city: ad.city,
        expires: ad.expires
      }
    }).pipe(
      map(result => result.data)
    )
  }

  deleteAd(id: string) {
    return this.apollo.mutate({
      mutation: DeleteAd,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  archiveAd(id: string) {
    return this.apollo.mutate({
      mutation: ArchiveAd,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  activateAd(id: string) {
    return this.apollo.mutate({
      mutation: ActivateAd,
      variables: {
        id: id
      }
    }).pipe(
      map(result => result.data)
    )
  }

  uploadFile(file: any, id: string, type: string) {
    return this.apollo.mutate({
      mutation: UploadFile,
      variables: {
        file: file,
        id: id,
        type: type
      }
    }).pipe(
      map(result => result.data)
    )
  }

}