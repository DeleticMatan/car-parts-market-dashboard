import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteTireDialogComponent } from '../delete-tire-dialog/delete-tire-dialog.component'
import { ActivateTireDialogComponent } from '../activate-tire-dialog/activate-tire-dialog.component'
import { AddTireComponent } from '../add-tire/add-tire.component'
import { EditTireComponent } from '../edit-tire/edit-tire.component'
import { Tire } from '../../../models/tire'
import { TireService } from '../../../shared/services/tire.service'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archived-tires',
  templateUrl: './archived-tires.component.html',
  styleUrls: ['./archived-tires.component.css']
})

export class ArchivedTiresComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<Tire>
  deleteTireDialogRef: MatDialogRef<DeleteTireDialogComponent>
  activateTireDialogRef: MatDialogRef<ActivateTireDialogComponent>
  addTireDialogRef: MatDialogRef<AddTireComponent>
  editTireDialogRef: MatDialogRef<EditTireComponent>
  tires: Tire[]
  loading: boolean = true

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
      this.tireService.getArchivedTiresDetails(this.userService.user.id).subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    } else {
      this.tireService.getArchivedTires().subscribe(data => {
        this.initialiseData(data)
      }, (error) => {
        console.log('Error', error)
      })
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.tireService.archivedTires)
    }
  }

  initialiseData(data: any) {
    this.tireService.archivedTires = data.tires
    this.displayedColumns = ['type', 'brand', 'diameter', 'width', 'actions']
    this.setDataSource(this.tireService.archivedTires)
    this.loading = false
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddTire() {
    let userId = this.detailsView === true && this.userService.user ? this.userService.user.id : null
    this.addTireDialogRef = this.dialog.open(AddTireComponent, {
      data: {
        active: false,
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

  openConfirmationActivate(tireId: string) {
    this.activateTireDialogRef = this.dialog.open(ActivateTireDialogComponent, {
      data: {
        tireId
      }
    })
    const sub = this.activateTireDialogRef.componentInstance.onTireActivated.subscribe((tire) => {
      this.loading = true
      this.removeActivatedTireFromTable(tire)
    })
    this.activateTireDialogRef.afterClosed().subscribe(() => {
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
    this.tireService.archivedTires.unshift(tire)
    this.setDataSource(this.tireService.archivedTires)
    this.helperService.openSnackBar('Oglas uspešno dodat!', 'OK')
    this.loading = false
  }

  updateTireInTable(tire) {
    this.editTireDialogRef.close()
    const index = this.tireService.archivedTires.findIndex(oldTire => oldTire.id === tire.id)
    if (index === -1) return
    this.tireService.archivedTires[index] = tire
    this.setDataSource(this.tireService.archivedTires)
    this.helperService.openSnackBar('Oglas uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteTireFromTable(tire) {
    this.deleteTireDialogRef.close()
    this.tireService.archivedTires = $.grep(this.tireService.archivedTires, (oldTire) => {
      return oldTire.id !== tire.id
    })
    this.setDataSource(this.tireService.archivedTires)
    this.helperService.openSnackBar('Oglas uspešno obrisan!', 'OK')
    this.loading = false
  }

  removeActivatedTireFromTable(tire) {
    this.activateTireDialogRef.close()
    this.tireService.archivedTires = $.grep(this.tireService.archivedTires, (oldTire) => {
      return oldTire.id !== tire.id
    })
    this.tireService.tires.unshift(tire)
    this.setDataSource(this.tireService.archivedTires)
    this.helperService.openSnackBar('Oglas uspešno aktiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: Tire[]) {
    this.dataSource = new MatTableDataSource<Tire>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
