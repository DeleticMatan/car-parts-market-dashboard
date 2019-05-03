import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteAdministratorDialogComponent } from '../delete-administrator-dialog/delete-administrator-dialog.component'
import { ActivateAdministratorDialogComponent } from '../activate-administrator-dialog/activate-administrator-dialog.component'
import { AddAdministratorComponent } from '../add-administrator/add-administrator.component'
import { EditAdministratorComponent } from '../edit-administrator/edit-administrator.component'
import { User } from '../../../models/user'
import { AdministratorService } from '../../../shared/services/administrator.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archived-administrators',
  templateUrl: './archived-administrators.component.html',
  styleUrls: ['./archived-administrators.component.css']
})

export class ArchivedAdministratorsComponent implements OnInit {
  displayedColumns: string[]
  dataSource: MatTableDataSource<User>
  deleteAdministratorDialogRef: MatDialogRef<DeleteAdministratorDialogComponent>
  activateAdministratorDialogRef: MatDialogRef<ActivateAdministratorDialogComponent>
  addAdministratorDialogRef: MatDialogRef<AddAdministratorComponent>
  editAdministratorDialogRef: MatDialogRef<EditAdministratorComponent>
  administrators: User[]
  loading: boolean = true

  @Input() visible: boolean
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private router: Router,
    private dialog: MatDialog,
    private administratorService: AdministratorService,
    private helperService: HelperService) { }

  ngOnInit() {
    this.initialiseData()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.administratorService.archivedAdministrators)
    }
  }

  initialiseData() {
    this.administratorService.getArchivedAdministrators().subscribe(data => {
      if (!this.administratorService.archivedAdministrators) {
        this.administratorService.archivedAdministrators = data.users
      }
      this.displayedColumns = ['name', 'email', 'phone', 'actions']
      this.setDataSource(this.administratorService.archivedAdministrators)
      this.loading = false
    }, (error) => {
      console.log('Error', error)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToAddAdministrator() {
    this.addAdministratorDialogRef = this.dialog.open(AddAdministratorComponent, {
      data: {
        active: false
      }
    })
    const sub = this.addAdministratorDialogRef.componentInstance.onAdministratorCreated.subscribe((administrator) => {
      this.loading = true
      this.addAdministratorToTable(administrator)
    })
    this.addAdministratorDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  goToEditAdministrator(administratorId) {
    this.editAdministratorDialogRef = this.dialog.open(EditAdministratorComponent, {
      data: {
        administratorId
      }
    })
    const sub = this.editAdministratorDialogRef.componentInstance.onAdministratorUpdated.subscribe((administrator) => {
      this.loading = true
      this.updateAdministratorInTable(administrator)
    })
    this.editAdministratorDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationActivate(administratorId: string) {
    this.activateAdministratorDialogRef = this.dialog.open(ActivateAdministratorDialogComponent, {
      data: {
        administratorId
      }
    })
    const sub = this.activateAdministratorDialogRef.componentInstance.onAdministratorActivated.subscribe((administrator) => {
      this.loading = true
      this.removeActivatedAdministratorFromTable(administrator)
    })
    this.activateAdministratorDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationDelete(administratorId: string) {
    this.deleteAdministratorDialogRef = this.dialog.open(DeleteAdministratorDialogComponent, {
      data: {
        administratorId
      }
    })
    const sub = this.deleteAdministratorDialogRef.componentInstance.onAdministratorDeleted.subscribe((administrator) => {
      this.loading = true
      this.deleteAdministratorFromTable(administrator)
    })
    this.deleteAdministratorDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  addAdministratorToTable(administrator) {
    this.addAdministratorDialogRef.close()
    this.administratorService.archivedAdministrators.unshift(administrator)
    this.setDataSource(this.administratorService.archivedAdministrators)
    this.helperService.openSnackBar('Administrator uspešno dodat!', 'OK')
    this.loading = false
  }

  updateAdministratorInTable(administrator) {
    this.editAdministratorDialogRef.close()
    const index = this.administratorService.archivedAdministrators.findIndex(oldAdministrator => oldAdministrator.id === administrator.id)
    if (index === -1) return
    this.administratorService.archivedAdministrators[index] = administrator
    this.setDataSource(this.administratorService.archivedAdministrators)
    this.helperService.openSnackBar('Administrator uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteAdministratorFromTable(administrator) {
    this.deleteAdministratorDialogRef.close()
    this.administratorService.archivedAdministrators = $.grep(this.administratorService.archivedAdministrators, (oldAdministrator) => {
      return oldAdministrator.id !== administrator.id
    })
    this.setDataSource(this.administratorService.archivedAdministrators)
    this.helperService.openSnackBar('Administrator uspešno obrisan!', 'OK')
    this.loading = false
  }

  removeActivatedAdministratorFromTable(administrator) {
    this.activateAdministratorDialogRef.close()
    this.administratorService.archivedAdministrators = $.grep(this.administratorService.archivedAdministrators, (oldAdministrator) => {
      return oldAdministrator.id !== administrator.id
    })
    this.administratorService.administrators.unshift(administrator)
    this.setDataSource(this.administratorService.archivedAdministrators)
    this.helperService.openSnackBar('Administrator uspešno aktiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: User[]) {
    this.dataSource = new MatTableDataSource<User>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
