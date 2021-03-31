import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-question-modal',
  templateUrl: './edit-question-modal.component.html',
  styleUrls: ['./edit-question-modal.component.scss']
})
export class EditQuestionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();

  @Input()
  question: any;

  themes = [
    'Select theme',
    'Python',
    'Angular',
    'Java',
    'Postegres'
  ];

  dificulties = [
    'Select dificulty',
    'EASY',
    'MEDIUM',
    'HARD'
  ];

  types = [
    'Select type',
    'Single answer',
    'Multiple answer',
    'Code',
    'Text'
  ];

  closeModal() {
    this.onClose.emit(true);
  }

  saveQuestion(data: any){
    this.onSave.emit(data);
  }

  onSubmit(event: any){
    event.preventDefault();

    const data = {
      code: event.target.code.value,
      description: event.target.description.value,
      theme: event.target.themecode.value,
      dificulty: event.target.dificulty.value,
      type: event.target.type.value,
      instructions: event.target.instructions.value,
    };

    this.saveQuestion(data);
  }

}

