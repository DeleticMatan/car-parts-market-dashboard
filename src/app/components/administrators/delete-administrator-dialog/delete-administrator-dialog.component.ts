import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-delete-administrator-dialog',
  templateUrl: './delete-administrator-dialog.component.html',
  styleUrls: ['./delete-administrator-dialog.component.css']
})
export class DeleteAdministratorDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdministratorDeleted: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  deleteAdministrator() {
    this.showSpinner = true
    this.userService.deleteUser(this.data.administratorId).subscribe(data => {
      this.onAdministratorDeleted.emit(data.deleteUser)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Neuspešno brisanje administratora', 'OK')
    })
  }

}

