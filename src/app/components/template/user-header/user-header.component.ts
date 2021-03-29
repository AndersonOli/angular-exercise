import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/views/user/login/login.component';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  loginComponent = new LoginComponent(this.router);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
