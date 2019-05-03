import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { RimService } from '../../../shared/services/rim.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-activate-rim-dialog',
  templateUrl: './activate-rim-dialog.component.html',
  styleUrls: ['./activate-rim-dialog.component.css']
})

export class ActivateRimDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onRimActivated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private rimService: RimService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  activateRim() {
    this.showSpinner = true
    this.rimService.activateRim(this.data.rimId).subscribe(data => {
      this.onRimActivated.emit(data.updateRim)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Aktivacija oglasa neuspešna', 'OK')
    })
  }

}



