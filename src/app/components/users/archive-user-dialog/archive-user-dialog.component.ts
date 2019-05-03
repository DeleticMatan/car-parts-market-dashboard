import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archive-user-dialog',
  templateUrl: './archive-user-dialog.component.html',
  styleUrls: ['./archive-user-dialog.component.css']
})
export class ArchiveUserDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onUserArchived: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  archiveUser() {
    this.showSpinner = true
    this.userService.archiveUser(this.data.userId).subscribe(data => {
      this.onUserArchived.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Arhivacija korisnika neuspešna', 'OK')
    })
  }

}


