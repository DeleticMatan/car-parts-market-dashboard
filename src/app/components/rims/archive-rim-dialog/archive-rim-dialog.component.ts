import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { RimService } from '../../../shared/services/rim.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archive-rim-dialog',
  templateUrl: './archive-rim-dialog.component.html',
  styleUrls: ['./archive-rim-dialog.component.css']
})
export class ArchiveRimDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onRimArchived: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private rimService: RimService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  archiveRim() {
    this.showSpinner = true
    this.rimService.archiveRim(this.data.rimId).subscribe(data => {
      this.onRimArchived.emit(data.updateRim)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Arhivacija oglasa neuspešna', 'OK')
    })
  }

}


