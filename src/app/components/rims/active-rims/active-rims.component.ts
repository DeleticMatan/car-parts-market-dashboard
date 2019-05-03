import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteRimDialogComponent } from '../delete-rim-dialog/delete-rim-dialog.component'
import { ArchiveRimDialogComponent } from '../archive-rim-dialog/archive-rim-dialog.component'
import { AddRimComponent } from '../add-rim/add-rim.component'
import { EditRimComponent } from '../edit-rim/edit-rim.component'
import { Rim } from '../../../models/rim'
import { RimService } from '../../../shared/services/rim.service'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-active-rims',
  templateUrl: './active-rims.component.html',
  styleUrls: ['./active-rims.component.css']
})

export class ActiveRimsComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<Rim>
  deleteRimDialogRef: MatDialogRef<DeleteRimDialogComponent>
  archiveRimDialogRef: MatDialogRef<ArchiveRimDialogComponent>
  addRimDialogRef: MatDialogRef<AddRimComponent>
  editRimDialogRef: MatDialogRef<EditRimComponent>
  loading: boolean = true
  public rims: Rim[]

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
      this.rimService.getRimsDetails(this.userService.user.id).subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    } else {
      this.rimService.getRims().subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.rimService.rims)
    }
  }

  initialiseData(data: any) {
    this.rimService.rims = data.rims
    this.displayedColumns = ['type', 'brand', 'diameter', 'width', 'actions']
    this.setDataSource(this.rimService.rims)
    this.loading = false
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddRim() {
    let userId = this.detailsView === true && this.userService.user ? this.userService.user.id : null
    this.addRimDialogRef = this.dialog.open(AddRimComponent, {
      data: {
        active: true,
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

  openConfirmationArchive(rimId: string) {
    this.archiveRimDialogRef = this.dialog.open(ArchiveRimDialogComponent, {
      data: {
        rimId
      }
    })
    const sub = this.archiveRimDialogRef.componentInstance.onRimArchived.subscribe((rim) => {
      this.loading = true
      this.archiveRimFromTable(rim)
    })
    this.archiveRimDialogRef.afterClosed().subscribe(() => {
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
    this.rimService.rims.unshift(rim)
    this.setDataSource(this.rimService.rims)
    this.helperService.openSnackBar('Oglas  uspešno dodat!', 'OK')
    this.loading = false
  }

  updateRimInTable(rim) {
    this.editRimDialogRef.close()
    const index = this.rimService.rims.findIndex(oldRim => oldRim.id === rim.id)
    if (index === -1) return
    this.rimService.rims[index] = rim
    this.setDataSource(this.rimService.rims)
    this.helperService.openSnackBar('Oglas  uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteRimFromTable(rim) {
    this.deleteRimDialogRef.close()
    this.rimService.rims = $.grep(this.rimService.rims, (oldRim) => {
      return oldRim.id !== rim.id
    })
    this.setDataSource(this.rimService.rims)
    this.helperService.openSnackBar('Oglas  uspešno obrisan!', 'OK')
    this.loading = false
  }

  archiveRimFromTable(rim) {
    this.archiveRimDialogRef.close()
    this.rimService.rims = $.grep(this.rimService.rims, (oldRim) => {
      return oldRim.id !== rim.id
    })
    this.rimService.archivedRims.unshift(rim)
    this.setDataSource(this.rimService.rims)
    this.helperService.openSnackBar('Oglas  uspešno arhiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: Rim[]) {
    this.dataSource = new MatTableDataSource<Rim>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
