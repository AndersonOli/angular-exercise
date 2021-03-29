import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminComponent } from 'src/app/views/admin/admin.component';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  adminComponent = new AdminComponent(this.router);

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(route.snapshot.routeConfig?.path);
  }

  ngOnInit(): void {
  }

}
