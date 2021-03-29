import { UserComponent } from './../../../views/user/user.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  userComponent = new UserComponent(this.router);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
