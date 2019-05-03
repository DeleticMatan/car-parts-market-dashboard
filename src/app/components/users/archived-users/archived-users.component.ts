import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component'
import { ActivateUserDialogComponent } from '../activate-user-dialog/activate-user-dialog.component'
import { AddUserComponent } from '../add-user/add-user.component'
import { EditUserComponent } from '../edit-user/edit-user.component'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archived-users',
  templateUrl: './archived-users.component.html',
  styleUrls: ['./archived-users.component.css']
})

export class ArchivedUsersComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<User>
  deleteUserDialogRef: MatDialogRef<DeleteUserDialogComponent>
  activateUserDialogRef: MatDialogRef<ActivateUserDialogComponent>
  addUserDialogRef: MatDialogRef<AddUserComponent>
  editUserDialogRef: MatDialogRef<EditUserComponent>
  users: User[]
  loading: boolean = true

  @Input() visible: boolean
  @ViewChild(MatPaginator) paginator: MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private helperService: HelperService) { }

  ngOnInit() {
    this.initialiseData()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && this.visible === true) {
      this.setDataSource(this.userService.archivedUsers)
    }
  }

  initialiseData() {
    this.userService.getArchivedUsers().subscribe(data => {
      if (!this.userService.archivedUsers) {
        this.userService.archivedUsers = data.users
      }
      this.displayedColumns = ['name', 'email', 'phone', 'actions']
      this.setDataSource(this.userService.archivedUsers)
      this.loading = false
    }, (error) => {
      console.log('Error', error)
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  goToUserDetails(user: User) {
    localStorage.setItem('selectedUser', JSON.stringify(user))
    this.router.navigate(['/user-details'])
  }

  goToAddUser() {
    this.addUserDialogRef = this.dialog.open(AddUserComponent, {
      data: {
        active: false
      }
    })
    const sub = this.addUserDialogRef.componentInstance.onUserCreated.subscribe((user) => {
      this.loading = true
      this.addUserToTable(user)
    })
    this.addUserDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  goToEditUser(userId) {
    this.editUserDialogRef = this.dialog.open(EditUserComponent, {
      data: {
        userId
      }
    })
    const sub = this.editUserDialogRef.componentInstance.onUserUpdated.subscribe((user) => {
      this.loading = true
      this.updateUserInTable(user)
    })
    this.editUserDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationActivate(userId: string) {
    this.activateUserDialogRef = this.dialog.open(ActivateUserDialogComponent, {
      data: {
        userId
      }
    })
    const sub = this.activateUserDialogRef.componentInstance.onUserActivated.subscribe((user) => {
      this.loading = true
      this.removeActivatedUserFromTable(user)
    })
    this.activateUserDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  openConfirmationDelete(userId: string) {
    this.deleteUserDialogRef = this.dialog.open(DeleteUserDialogComponent, {
      data: {
        userId
      }
    })
    const sub = this.deleteUserDialogRef.componentInstance.onUserDeleted.subscribe((user) => {
      this.loading = true
      this.deleteUserFromTable(user)
    })
    this.deleteUserDialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  addUserToTable(user) {
    this.addUserDialogRef.close()
    this.userService.archivedUsers.unshift(user)
    this.setDataSource(this.userService.archivedUsers)
    this.helperService.openSnackBar('Korisnik uspešno dodat!', 'OK')
    this.loading = false
  }

  updateUserInTable(user) {
    this.editUserDialogRef.close()
    const index = this.userService.archivedUsers.findIndex(oldUser => oldUser.id === user.id)
    if (index === -1) return
    this.userService.archivedUsers[index] = user
    this.setDataSource(this.userService.archivedUsers)
    this.helperService.openSnackBar('Korisnik uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteUserFromTable(user) {
    this.deleteUserDialogRef.close()
    this.userService.archivedUsers = $.grep(this.userService.archivedUsers, (oldUser) => {
      return oldUser.id !== user.id
    })
    this.setDataSource(this.userService.archivedUsers)
    this.helperService.openSnackBar('Korisnik uspešno obrisan!', 'OK')
    this.loading = false
  }

  removeActivatedUserFromTable(user) {
    this.activateUserDialogRef.close()
    this.userService.archivedUsers = $.grep(this.userService.archivedUsers, (oldUser) => {
      return oldUser.id !== user.id
    })
    this.userService.users.unshift(user)
    this.setDataSource(this.userService.archivedUsers)
    this.helperService.openSnackBar('Korisnik uspešno aktiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: User[]) {
    this.dataSource = new MatTableDataSource<User>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
