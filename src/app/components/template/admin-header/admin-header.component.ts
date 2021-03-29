import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminLoginComponent } from 'src/app/views/admin/admin-login/admin-login.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  loginComponent = new AdminLoginComponent(this.router);

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(route.snapshot.routeConfig?.path);
  }

  ngOnInit(): void {
  }

}
