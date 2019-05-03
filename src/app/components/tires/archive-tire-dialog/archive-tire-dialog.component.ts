import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { TireService } from '../../../shared/services/tire.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archive-tire-dialog',
  templateUrl: './archive-tire-dialog.component.html',
  styleUrls: ['./archive-tire-dialog.component.css']
})
export class ArchiveTireDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onTireArchived: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private tireService: TireService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  archiveTire() {
    this.showSpinner = true
    this.tireService.archiveTire(this.data.tireId).subscribe(data => {
      this.onTireArchived.emit(data.updateTire)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Arhivacija oglasa neuspešna', 'OK')
    })
  }

}


