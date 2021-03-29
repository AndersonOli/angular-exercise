import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CandidateComponent } from 'src/app/views/admin/candidate/candidate.component';

@Component({
  selector: 'app-admin-candidate-questions',
  templateUrl: './admin-candidate-questions.component.html',
  styleUrls: ['./admin-candidate-questions.component.scss']
})
export class AdminCandidateQuestionsComponent implements OnInit {

  constructor() { }

  private eventsSubscription: Subscription = new Subscription();

  @Input()
  events!: Observable<string>;

  ngOnInit(): void {
    this.eventsSubscription = this.events.subscribe((tab: any) => this.updateQuestions(tab));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  updateQuestions(tab: any){
    console.log(tab);
  }
}
