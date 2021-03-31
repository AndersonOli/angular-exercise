import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-candidate-modal',
  templateUrl: './edit-candidate-modal.component.html',
  styleUrls: ['./edit-candidate-modal.component.scss']
})
export class EditCandidateModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @ViewChild('candidateForm') candidateForm: ElementRef | undefined;

  @Output()
  onSave: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  candidate: any;

  saveCandidate(data: any) {
    this.onSave.emit(data);  
  }

  onSubmit(event: any){
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      email: event.target.email.value
    };

    this.saveCandidate(data);
  }
}
