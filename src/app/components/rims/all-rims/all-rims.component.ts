import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatTabChangeEvent } from '@angular/material'

@Component({
  selector: 'app-all-rims',
  templateUrl: './all-rims.component.html',
  styleUrls: ['./all-rims.component.css']
})
export class AllRimsComponent implements OnInit {
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

