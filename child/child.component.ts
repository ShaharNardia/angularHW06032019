import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  user: any = {};
  constructor(private usersrv: ServiceService) { }

  @Input()
  userId;

  ngOnInit() {
    this.usersrv.getUserById(this.userId).subscribe(data => {
      this.user = data;
    });
  }

}
