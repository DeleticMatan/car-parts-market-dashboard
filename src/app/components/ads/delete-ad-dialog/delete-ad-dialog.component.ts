import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { AdService } from '../../../shared/services/ad.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-delete-ad-dialog',
  templateUrl: './delete-ad-dialog.component.html',
  styleUrls: ['./delete-ad-dialog.component.css']
})
export class DeleteAdDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdDeleted: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private adService: AdService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  deleteAd() {
    this.showSpinner = true
    this.adService.deleteAd(this.data.adId).subscribe(data => {
      this.onAdDeleted.emit(data.deleteAd)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Brisanje oglasa neuspešno', 'OK')
    })
  }

}

