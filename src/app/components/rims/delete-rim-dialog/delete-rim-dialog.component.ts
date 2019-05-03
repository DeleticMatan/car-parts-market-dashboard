import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { RimService } from '../../../shared/services/rim.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-delete-rim-dialog',
  templateUrl: './delete-rim-dialog.component.html',
  styleUrls: ['./delete-rim-dialog.component.css']
})
export class DeleteRimDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onRimDeleted: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private rimService: RimService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  deleteRim() {
    this.showSpinner = true
    this.rimService.deleteRim(this.data.rimId).subscribe(data => {
      this.onRimDeleted.emit(data.deleteRim)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Brisanje oglasa neuspešno', 'OK')
    })
  }

}

