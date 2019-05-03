import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { TireService } from '../../../shared/services/tire.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-activate-tire-dialog',
  templateUrl: './activate-tire-dialog.component.html',
  styleUrls: ['./activate-tire-dialog.component.css']
})

export class ActivateTireDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onTireActivated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private tireService: TireService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  activateTire() {
    this.showSpinner = true
    this.tireService.activateTire(this.data.tireId).subscribe(data => {
      this.onTireActivated.emit(data.updateTire)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Aktivacija oglasa neuspešna', 'OK')
    })
  }

}



