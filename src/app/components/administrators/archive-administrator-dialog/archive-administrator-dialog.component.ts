import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archive-administrator-dialog',
  templateUrl: './archive-administrator-dialog.component.html',
  styleUrls: ['./archive-administrator-dialog.component.css']
})
export class ArchiveAdministratorDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdministratorArchived: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  archiveAdministrator() {
    this.showSpinner = true
    this.userService.archiveUser(this.data.administratorId).subscribe(data => {
      this.onAdministratorArchived.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Arhivacija administratora neuspešna', 'OK')
    })
  }

}


