import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { AdService } from '../../../shared/services/ad.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-activate-ad-dialog',
  templateUrl: './activate-ad-dialog.component.html',
  styleUrls: ['./activate-ad-dialog.component.css']
})

export class ActivateAdDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdActivated: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private adService: AdService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  activateAd() {
    this.showSpinner = true
    this.adService.activateAd(this.data.adId).subscribe(data => {
      this.onAdActivated.emit(data.updateAd)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Aktivacija oglasa neuspešna', 'OK')
    })
  }

}



