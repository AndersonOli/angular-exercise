import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Query } from '@angular/core';

@Component({
  selector: 'app-edit-question-modal',
  templateUrl: './edit-question-modal.component.html',
  styleUrls: ['./edit-question-modal.component.scss']
})
export class EditQuestionModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @ViewChild('inputEditQuestion')
  inputEditQuestion!: ElementRef;

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();

  @Input()
  question: any = {};

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

  recieveAnswers(data: any){
    this.answers = data;
  }

  recieveAnswersMultiple(data: any){
    this.answers = data;
  }

  recieveAnswerText(text: any){
    this.answers.text = text;
  }

  recieveAnswerCode(code: any){
    this.answers.code = code;
  }

  // change the type of answer of the question
  handleChangeType(event: any){
    var value = event.target.value;
    this.question.type = value;
  }

  @Input()
  answers: any;

  editMode: boolean = false;
  editIndex = 0;

  addNewAnswer(){
    // updates if exists
    if(this.editMode){
      const answer = {
        value: this.answers[this.editIndex].value,
        correctAnswer: this.answers[this.editIndex].correctAnswer,
        answer: this.inputEditQuestion.nativeElement.value
      };

      this.answers[this.editIndex] = answer;
      this.inputEditQuestion.nativeElement.value = '';

      this.editMode = false;
      this.editIndex = 0;

      return;
    }

    var answerValue = 0;

    //add
    if(this.answers.length > 0){
      const answerValue = (this.answers[this.answers.length - 1].value);
    }
    
    const answer = {
      value: (answerValue + 1),
      correctAnswer: false,
      answer: this.inputEditQuestion.nativeElement.value
    };

    this.answers.push(answer);
    this.inputEditQuestion.nativeElement.value = '';
  }

  editAnswer(index: any){
    this.editMode = true;
    this.editIndex = index;

    const oldAnswer = this.answers[index].answer;
    this.inputEditQuestion.nativeElement.value = oldAnswer;
  }

  deleteAnswer(id: any){
    this.answers.splice(id, 1);
  }

  handleChange(event: any){
    var value = event.target.value;

    for(let i = 0; i < this.answers.length; i++){
      if(value == this.answers[i].value){
        for(let j = 0; j < this.answers.length; j++){
          this.answers[j].correctAnswer = false;
        }

        this.answers[i].correctAnswer = true;
      }
    }
  }

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
      answers: this.answers
    };

    this.saveQuestion(data);
  }

}

