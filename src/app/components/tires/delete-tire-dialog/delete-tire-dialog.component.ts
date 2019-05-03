import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { TireService } from '../../../shared/services/tire.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-delete-tire-dialog',
  templateUrl: './delete-tire-dialog.component.html',
  styleUrls: ['./delete-tire-dialog.component.css']
})
export class DeleteTireDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onTireDeleted: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private tireService: TireService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  deleteTire() {
    this.showSpinner = true
    this.tireService.deleteTire(this.data.tireId).subscribe(data => {
      this.onTireDeleted.emit(data.deleteTire)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Brisanje oglasa neuspešno', 'OK')
    })
  }

}

