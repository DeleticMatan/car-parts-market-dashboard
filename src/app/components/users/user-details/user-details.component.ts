import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../shared/services/user.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.user = JSON.parse(localStorage.getItem('selectedUser'))
  }

}
