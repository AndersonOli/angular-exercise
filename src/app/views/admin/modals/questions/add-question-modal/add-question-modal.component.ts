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

  answers = [
    {
      value: 1,
      correctAnswer: true,
      answer: "Here's the first question"
    },
  ];

  @ViewChild('inputNewQuestion')
  inputNewQuestion!: ElementRef;

  editMode: boolean = false;
  editIndex = 0;

  addNewAnswer(){
    // updates if exists
    if(this.editMode){
      const answer = {
        value: this.answers[this.editIndex].value,
        correctAnswer: this.answers[this.editIndex].correctAnswer,
        answer: this.inputNewQuestion.nativeElement.value
      };

      this.answers[this.editIndex] = answer;
      this.inputNewQuestion.nativeElement.value = '';

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
      answer: this.inputNewQuestion.nativeElement.value
    };

    this.answers.push(answer);
    this.inputNewQuestion.nativeElement.value = '';
  }

  editAnswer(index: any){
    this.editMode = true;
    this.editIndex = index;

    const oldAnswer = this.answers[index].answer;
    this.inputNewQuestion.nativeElement.value = oldAnswer;
  }

  deleteAnswer(id: any){
    this.answers.splice(id, 1);
  }

  handleChange(event: any){
    var value = event.target.value;

    this.answers.forEach((element, index) => {
      if(value == this.answers[index].value){
        this.answers.forEach((element, index) => {
          this.answers[index].correctAnswer = false;
        });

        this.answers[index].correctAnswer = true;
      }
    });

    console.log(this.answers)
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

    this.addQuestion(data);
  }

}
