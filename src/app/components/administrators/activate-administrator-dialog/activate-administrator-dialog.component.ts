import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-activate-administrator-dialog',
  templateUrl: './activate-administrator-dialog.component.html',
  styleUrls: ['./activate-administrator-dialog.component.css']
})

export class ActivateAdministratorDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdministratorActivated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  activateAdministrator() {
    this.showSpinner = true
    this.userService.activateUser(this.data.administratorId).subscribe(data => {
      this.onAdministratorActivated.emit(data.updateUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Aktivacija administratora neuspešna', 'OK')
    })
  }

}



