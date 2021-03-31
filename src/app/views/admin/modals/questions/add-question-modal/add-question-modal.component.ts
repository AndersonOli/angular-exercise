import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-question-modal',
  templateUrl: './add-question-modal.component.html',
  styleUrls: ['./add-question-modal.component.scss']
})
export class AddQuestionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onAdd: EventEmitter<any> = new EventEmitter();

  closeModal() {
    this.onClose.emit(true);
  }

  addQuestion(data: any){
    this.onAdd.emit(data);
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

    this.addQuestion(data);
  }

}
