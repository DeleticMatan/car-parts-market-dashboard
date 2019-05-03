import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material'
import { Inject } from '@angular/core'
import { AdService } from '../../../shared/services/ad.service'
import { HelperService } from '../../../shared/services/helper.service'

@Component({
  selector: 'app-archive-ad-dialog',
  templateUrl: './archive-ad-dialog.component.html',
  styleUrls: ['./archive-ad-dialog.component.css']
})
export class ArchiveAdDialogComponent implements OnInit {
  showSpinner: boolean = false
  @Input() diameter: number
  @Output() onAdArchived: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private adService: AdService,
    public helperService: HelperService) { }

  ngOnInit() {
  }

  archiveAd() {
    this.showSpinner = true
    this.adService.archiveAd(this.data.adId).subscribe(data => {
      this.onAdArchived.emit(data.updateAd)
      this.showSpinner = false
    }, (error) => {
      this.showSpinner = false
      this.helperService.openSnackBar('Arhivacija oglasa neuspešna', 'OK')
    })
  }

}


