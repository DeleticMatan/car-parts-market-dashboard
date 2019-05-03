import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { MatPaginator, MatSort, MatTableDataSource, TooltipPosition, MatDialog, MatDialogRef } from '@angular/material'
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component'
import { ArchiveUserDialogComponent } from '../archive-user-dialog/archive-user-dialog.component'
import { AddUserComponent } from '../add-user/add-user.component'
import { EditUserComponent } from '../edit-user/edit-user.component'
import { User } from '../../../models/user'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})

export class ActiveUsersComponent implements OnChanges {
  displayedColumns: string[]
  dataSource: MatTableDataSource<User>
  deleteUserDialogRef: MatDialogRef<DeleteUserDialogComponent>
  archiveUserDialogRef: MatDialogRef<ArchiveUserDialogComponent>
  addUserDialogRef: MatDialogRef<AddUserComponent>
  editUserDialogRef: MatDialogRef<EditUserComponent>
  loading: boolean = true
  public users: User[]

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
      this.setDataSource(this.userService.users)
    }
  }

  initialiseData() {
    this.userService.getUsers().subscribe(data => {
      if (!this.userService.users) {
        this.userService.users = data.users
      }
      this.displayedColumns = ['name', 'email', 'phone', 'actions']
      this.setDataSource(this.userService.users)
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
        active: true
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

  openConfirmationArchive(userId: string) {
    this.archiveUserDialogRef = this.dialog.open(ArchiveUserDialogComponent, {
      data: {
        userId
      }
    })
    const sub = this.archiveUserDialogRef.componentInstance.onUserArchived.subscribe((user) => {
      this.loading = true
      this.archiveUserFromTable(user)
    })
    this.archiveUserDialogRef.afterClosed().subscribe(() => {
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
    this.userService.users.unshift(user)
    this.setDataSource(this.userService.users)
    this.helperService.openSnackBar('Korisnik uspešno dodat!', 'OK')
    this.loading = false
  }

  updateUserInTable(user) {
    this.editUserDialogRef.close()
    const index = this.userService.users.findIndex(oldUser => oldUser.id === user.id)
    if (index === -1) return
    this.userService.users[index] = user
    this.setDataSource(this.userService.users)
    this.helperService.openSnackBar('Korisnik uspešno izmenjen!', 'OK')
    this.loading = false
  }

  deleteUserFromTable(user) {
    this.deleteUserDialogRef.close()
    this.userService.users = $.grep(this.userService.users, (oldUser) => {
      return oldUser.id !== user.id
    })
    this.setDataSource(this.userService.users)
    this.helperService.openSnackBar('Korisnik uspešno obrisan!', 'OK')
    this.loading = false
  }

  archiveUserFromTable(user) {
    this.archiveUserDialogRef.close()
    this.userService.users = $.grep(this.userService.users, (oldUser) => {
      return oldUser.id !== user.id
    })
    this.userService.archivedUsers.unshift(user)
    this.setDataSource(this.userService.users)
    this.helperService.openSnackBar('Korisnik uspešno arhiviran!', 'OK')
    this.loading = false
  }

  setDataSource(data: User[]) {
    this.dataSource = new MatTableDataSource<User>(data)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
}
