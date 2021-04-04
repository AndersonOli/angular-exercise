import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  typeQuestion: string = 'None';

  // change the type of answer of the question
  handleChangeType(event: any){
    var value = event.target.value;

    this.typeQuestion = value;
  }

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

  answers: any = {};

  onSubmit(event: any){
    event.preventDefault();
    
    let type = event.target.type.value;

    const data = {
      code: event.target.code.value,
      description: event.target.description.value,
      theme: event.target.themecode.value,
      dificulty: event.target.dificulty.value,
      type: type,
      instructions: event.target.instructions.value,
      answers: this.answers,
    };

    this.addQuestion(data);
  }

  recieveAnswers(data: any){
    this.answers = data;
  }

  recieveAnswersMultiple(data: any){
    this.answers = data;
  }

  recieveAnswerText(data: any){
    this.answers.text = data;
  }

  recieveAnswerCode(data: any){
    this.answers.code = data;
  }
}
