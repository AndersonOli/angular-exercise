import { UserComponent } from './../user.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss']
})
export class ConclusionComponent implements OnInit {

  userComponent = new UserComponent(this.router);

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
