import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-activate-user-dialog',
  templateUrl: './activate-user-dialog.component.html',
  styleUrls: ['./activate-user-dialog.component.css']
})

export class ActivateUserDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onUserActivated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  activateUser() {
    this.showSpinner = true
    this.userService.activateUser(this.data.userId).subscribe(data => {
      this.onUserActivated.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Aktivacija korisnika neuspešna', 'OK')
    })
  }

}



