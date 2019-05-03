import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatTabChangeEvent } from '@angular/material'

@Component({
  selector: 'app-all-ads',
  templateUrl: './all-ads.component.html',
  styleUrls: ['./all-ads.component.css']
})
export class AllAdsComponent implements OnInit {
  public visibleActive: boolean = true
  public visibleArchived: boolean = false

  @Input() detailsView: boolean

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    localStorage.removeItem('selectedUser')
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.visibleActive = true
      this.visibleArchived = false
    } else {
      this.visibleActive = false
      this.visibleArchived = true
    }
  }

}

