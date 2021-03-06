import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteAdDialogComponent } from '../delete-ad-dialog/delete-ad-dialog.component'
import { ActivateAdDialogComponent } from '../activate-ad-dialog/activate-ad-dialog.component'
import { AddAdComponent } from '../add-ad/add-ad.component'
import { EditAdComponent } from '../edit-ad/edit-ad.component'
import { Ad } from '../../../models/ad'
import { AdService } from '../../../shared/services/ad.service'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archived-ads',
  templateUrl: './archived-ads.component.html',
  styleUrls: ['./archived-ads.component.css']
})

export class ArchivedAdsComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<Ad>
  deleteAdDialogRef: MatDialogRef<DeleteAdDialogComponent>
  activateAdDialogRef: MatDialogRef<ActivateAdDialogComponent>
  addAdDialogRef: MatDialogRef<AddAdComponent>
  editAdDialogRef: MatDialogRef<EditAdComponent>
  ads: Ad[]
  loading: boolean = true

  @Input() visible: boolean
  @Input() detailsView: boolean
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private router: Router,
    private dialog: MatDialog,
    private adService: AdService,
    private userService: UserService,
    private helperService: HelperService) { }

  ngOnInit() {
    if (this.detailsView === true) {
      this.adService.getArchivedAdsDetails(this.userService.user.id).subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    } else {
      this.adService.getArchivedAds().subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.adService.archivedAds)
    }
  }

  initialiseData(data: any) {
    this.adService.archivedAds = data.ads
    this.displayedColumns = ['brand', 'model', 'category', 'actions']
    this.setDataSource(this.adService.archivedAds)
    this.loading = false
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddAd() {
    let userId = this.detailsView === true && this.userService.user ? this.userService.user.id : null
    this.addAdDialogRef = this.dialog.open(AddAdComponent, {
      data: {
        active: false,
        userId
      }
    })
    const sub = this.addAdDialogRef.componentInstance.onAdCreated.subscribe((ad) => {
      this.loading = true
      this.addAdToTable(ad)
    })
    this.addAdDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  goToEditAd(adId) {
    this.editAdDialogRef = this.dialog.open(EditAdComponent, {
      data: {
        adId
      }
    })
    const sub = this.editAdDialogRef.componentInstance.onAdUpdated.subscribe((ad) => {
      this.loading = true
      this.updateAdInTable(ad)
    })
    this.editAdDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationActivate(adId: string) {
    this.activateAdDialogRef = this.dialog.open(ActivateAdDialogComponent, {
      data: {
        adId
      }
    })
    const sub = this.activateAdDialogRef.componentInstance.onAdActivated.subscribe((ad) => {
      this.loading = true
      this.removeActivatedAdFromTable(ad)
    })
    this.activateAdDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationDelete(adId: string) {
    this.deleteAdDialogRef = this.dialog.open(DeleteAdDialogComponent, {
      data: {
        adId
      }
    })
    const sub = this.deleteAdDialogRef.componentInstance.onAdDeleted.subscribe((ad) => {
      this.loading = true
      this.deleteAdFromTable(ad)
    })
    this.deleteAdDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  addAdToTable(ad) {
    this.addAdDialogRef.close()
    this.adService.archivedAds.unshift(ad)
    this.setDataSource(this.adService.archivedAds)
    this.helperService.openSnackBar('Oglas uspešno dodat!', 'OK')
    this.loading = false
  }

  updateAdInTable(ad) {
    this.editAdDialogRef.close()
    const index = this.adService.archivedAds.findIndex(oldAd => oldAd.id === ad.id)
    if (index === -1) return
    this.adService.archivedAds[index] = ad
    this.setDataSource(this.adService.archivedAds)
    this.helperService.openSnackBar('Oglas uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteAdFromTable(ad) {
    this.deleteAdDialogRef.close()
    this.adService.archivedAds = $.grep(this.adService.archivedAds, (oldAd) => {
      return oldAd.id !== ad.id
    })
    this.setDataSource(this.adService.archivedAds)
    this.helperService.openSnackBar('Oglas uspešno obrisan!', 'OK')
    this.loading = false
  }

  removeActivatedAdFromTable(ad) {
    this.activateAdDialogRef.close()
    this.adService.archivedAds = $.grep(this.adService.archivedAds, (oldAd) => {
      return oldAd.id !== ad.id
    })
    this.adService.ads.unshift(ad)
    this.setDataSource(this.adService.archivedAds)
    this.helperService.openSnackBar('Oglas uspešno aktiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: Ad[]) {
    this.dataSource = new MatTableDataSource<Ad>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
