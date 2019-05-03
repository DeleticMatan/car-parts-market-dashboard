import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteRimDialogComponent } from '../delete-rim-dialog/delete-rim-dialog.component'
import { ActivateRimDialogComponent } from '../activate-rim-dialog/activate-rim-dialog.component'
import { AddRimComponent } from '../add-rim/add-rim.component'
import { EditRimComponent } from '../edit-rim/edit-rim.component'
import { Rim } from '../../../models/rim'
import { RimService } from '../../../shared/services/rim.service'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archived-rims',
  templateUrl: './archived-rims.component.html',
  styleUrls: ['./archived-rims.component.css']
})

export class ArchivedRimsComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<Rim>
  deleteRimDialogRef: MatDialogRef<DeleteRimDialogComponent>
  activateRimDialogRef: MatDialogRef<ActivateRimDialogComponent>
  addRimDialogRef: MatDialogRef<AddRimComponent>
  editRimDialogRef: MatDialogRef<EditRimComponent>
  rims: Rim[]
  loading: boolean = true

  @Input() visible: boolean
  @Input() detailsView: boolean
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private router: Router,
    private dialog: MatDialog,
    private rimService: RimService,
    private userService: UserService,
    private helperService: HelperService) { }

  ngOnInit() {
    if (this.detailsView === true) {
      this.rimService.getArchivedRimsDetails(this.userService.user.id).subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    } else {
      this.rimService.getArchivedRims().subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.rimService.archivedRims)
    }
  }

  initialiseData(data: any) {
    this.rimService.archivedRims = data.rims
    this.displayedColumns = ['type', 'brand', 'diameter', 'width', 'actions']
    this.setDataSource(this.rimService.archivedRims)
    this.loading = false
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddRim() {
    let userId = this.detailsView === true && this.userService.user ? this.userService.user.id : null
    this.addRimDialogRef = this.dialog.open(AddRimComponent, {
      data: {
        active: false,
        userId
      }
    })
    const sub = this.addRimDialogRef.componentInstance.onRimCreated.subscribe((rim) => {
      this.loading = true
      this.rimdRimToTable(rim)
    })
    this.addRimDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  goToEditRim(rimId) {
    this.editRimDialogRef = this.dialog.open(EditRimComponent, {
      data: {
        rimId
      }
    })
    const sub = this.editRimDialogRef.componentInstance.onRimUpdated.subscribe((rim) => {
      this.loading = true
      this.updateRimInTable(rim)
    })
    this.editRimDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationActivate(rimId: string) {
    this.activateRimDialogRef = this.dialog.open(ActivateRimDialogComponent, {
      data: {
        rimId
      }
    })
    const sub = this.activateRimDialogRef.componentInstance.onRimActivated.subscribe((rim) => {
      this.loading = true
      this.removeActivatedRimFromTable(rim)
    })
    this.activateRimDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationDelete(rimId: string) {
    this.deleteRimDialogRef = this.dialog.open(DeleteRimDialogComponent, {
      data: {
        rimId
      }
    })
    const sub = this.deleteRimDialogRef.componentInstance.onRimDeleted.subscribe((rim) => {
      this.loading = true
      this.deleteRimFromTable(rim)
    })
    this.deleteRimDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  rimdRimToTable(rim) {
    this.addRimDialogRef.close()
    this.rimService.archivedRims.unshift(rim)
    this.setDataSource(this.rimService.archivedRims)
    this.helperService.openSnackBar('Oglas uspešno dodat!', 'OK')
    this.loading = false
  }

  updateRimInTable(rim) {
    this.editRimDialogRef.close()
    const index = this.rimService.archivedRims.findIndex(oldRim => oldRim.id === rim.id)
    if (index === -1) return
    this.rimService.archivedRims[index] = rim
    this.setDataSource(this.rimService.archivedRims)
    this.helperService.openSnackBar('Oglas uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteRimFromTable(rim) {
    this.deleteRimDialogRef.close()
    this.rimService.archivedRims = $.grep(this.rimService.archivedRims, (oldRim) => {
      return oldRim.id !== rim.id
    })
    this.setDataSource(this.rimService.archivedRims)
    this.helperService.openSnackBar('Oglas uspešno obrisan!', 'OK')
    this.loading = false
  }

  removeActivatedRimFromTable(rim) {
    this.activateRimDialogRef.close()
    this.rimService.archivedRims = $.grep(this.rimService.archivedRims, (oldRim) => {
      return oldRim.id !== rim.id
    })
    this.rimService.rims.unshift(rim)
    this.setDataSource(this.rimService.archivedRims)
    this.helperService.openSnackBar('Oglas uspešno aktiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: Rim[]) {
    this.dataSource = new MatTableDataSource<Rim>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
