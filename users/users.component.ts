import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private usersvc: ServiceService) { }

  ngOnInit() {
    this.usersvc.getUsers().subscribe(data => {
      this.users = data;
    })
  }

}
