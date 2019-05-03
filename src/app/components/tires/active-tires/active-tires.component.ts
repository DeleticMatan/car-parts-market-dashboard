import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteTireDialogComponent } from '../delete-tire-dialog/delete-tire-dialog.component'
import { ArchiveTireDialogComponent } from '../archive-tire-dialog/archive-tire-dialog.component'
import { AddTireComponent } from '../add-tire/add-tire.component'
import { EditTireComponent } from '../edit-tire/edit-tire.component'
import { Tire } from '../../../models/tire'
import { TireService } from '../../../shared/services/tire.service'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-active-tires',
  templateUrl: './active-tires.component.html',
  styleUrls: ['./active-tires.component.css']
})

export class ActiveTiresComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<Tire>
  deleteTireDialogRef: MatDialogRef<DeleteTireDialogComponent>
  archiveTireDialogRef: MatDialogRef<ArchiveTireDialogComponent>
  addTireDialogRef: MatDialogRef<AddTireComponent>
  editTireDialogRef: MatDialogRef<EditTireComponent>
  loading: boolean = true
  public tires: Tire[]

  @Input() visible: boolean
  @Input() detailsView: boolean
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private router: Router,
    private dialog: MatDialog,
    private tireService: TireService,
    private userService: UserService,
    private helperService: HelperService) { }

  ngOnInit() {
    if (this.detailsView === true) {
      this.tireService.getTiresDetails(this.userService.user.id).subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    } else {
      this.tireService.getTires().subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.tireService.tires)
    }
  }

  initialiseData(data: any) {
    this.tireService.tires = data.tires
    this.displayedColumns = ['type', 'brand', 'diameter', 'width', 'actions']
    this.setDataSource(this.tireService.tires)
    this.loading = false
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddTire() {
    let userId = this.detailsView === true && this.userService.user ? this.userService.user.id : null
    this.addTireDialogRef = this.dialog.open(AddTireComponent, {
      data: {
        active: true,
        userId
      }
    })
    const sub = this.addTireDialogRef.componentInstance.onTireCreated.subscribe((tire) => {
      this.loading = true
      this.tiredTireToTable(tire)
    })
    this.addTireDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  goToEditTire(tireId) {
    this.editTireDialogRef = this.dialog.open(EditTireComponent, {
      data: {
        tireId
      }
    })
    const sub = this.editTireDialogRef.componentInstance.onTireUpdated.subscribe((tire) => {
      this.loading = true
      this.updateTireInTable(tire)
    })
    this.editTireDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationArchive(tireId: string) {
    this.archiveTireDialogRef = this.dialog.open(ArchiveTireDialogComponent, {
      data: {
        tireId
      }
    })
    const sub = this.archiveTireDialogRef.componentInstance.onTireArchived.subscribe((tire) => {
      this.loading = true
      this.archiveTireFromTable(tire)
    })
    this.archiveTireDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationDelete(tireId: string) {
    this.deleteTireDialogRef = this.dialog.open(DeleteTireDialogComponent, {
      data: {
        tireId
      }
    })
    const sub = this.deleteTireDialogRef.componentInstance.onTireDeleted.subscribe((tire) => {
      this.loading = true
      this.deleteTireFromTable(tire)
    })
    this.deleteTireDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  tiredTireToTable(tire) {
    this.addTireDialogRef.close()
    this.tireService.tires.unshift(tire)
    this.setDataSource(this.tireService.tires)
    this.helperService.openSnackBar('Oglas  uspešno dodat!', 'OK')
    this.loading = false
  }

  updateTireInTable(tire) {
    this.editTireDialogRef.close()
    const index = this.tireService.tires.findIndex(oldTire => oldTire.id === tire.id)
    if (index === -1) return
    this.tireService.tires[index] = tire
    this.setDataSource(this.tireService.tires)
    this.helperService.openSnackBar('Oglas  uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteTireFromTable(tire) {
    this.deleteTireDialogRef.close()
    this.tireService.tires = $.grep(this.tireService.tires, (oldTire) => {
      return oldTire.id !== tire.id
    })
    this.setDataSource(this.tireService.tires)
    this.helperService.openSnackBar('Oglas  uspešno obrisan!', 'OK')
    this.loading = false
  }

  archiveTireFromTable(tire) {
    this.archiveTireDialogRef.close()
    this.tireService.tires = $.grep(this.tireService.tires, (oldTire) => {
      return oldTire.id !== tire.id
    })
    this.tireService.archivedTires.unshift(tire)
    this.setDataSource(this.tireService.tires)
    this.helperService.openSnackBar('Oglas  uspešno arhiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: Tire[]) {
    this.dataSource = new MatTableDataSource<Tire>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
