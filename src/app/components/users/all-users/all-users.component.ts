import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MatTabChangeEvent } from '@angular/material'

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public visibleActive: boolean = true
  public visibleArchived: boolean = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
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

