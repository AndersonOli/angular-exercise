import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.answers = this.inputAnswers;
  }

  @Output()
  onChangeAnswers: EventEmitter<any> = new EventEmitter();

  @Input()
  inputAnswers: any;

  answers = {
    single: [
      {
        value: 1,
        correctAnswer: true,
        answer: "Here's the first question"
      },
    ]
  };

  @ViewChild('inputNewQuestion')
  inputNewQuestion!: ElementRef;

  editMode: boolean = false;
  editIndex = 0;

  addNewAnswer(){
    //updates if exists
    if(this.editMode){
      const answer = {
        value: this.answers.single[this.editIndex].value,
        correctAnswer: this.answers.single[this.editIndex].correctAnswer,
        answer: this.inputNewQuestion.nativeElement.value
      };

      this.answers.single[this.editIndex] = answer;
      this.inputNewQuestion.nativeElement.value = '';

      this.editMode = false;
      this.editIndex = 0;

      this.onChangeAnswers.emit(this.answers);

      return;
    }

    var answerValue = 0;

    //add
    if(this.sizeObj(this.answers.single) > 0){
      answerValue = (this.answers.single[this.sizeObj(this.answers.single) - 1].value);
    }
    
    const answer = {
      value: (answerValue + 1),
      correctAnswer: false,
      answer: this.inputNewQuestion.nativeElement.value
    };

    if(this.sizeObj(this.answers.single) === 0){
      this.answers.single = [answer];
    } else {
      this.answers.single.push(answer);
    }

    this.inputNewQuestion.nativeElement.value = '';

    this.onChangeAnswers.emit(this.answers);
  }

  sizeObj(obj: any) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  editAnswer(index: any){
    this.editMode = true;
    this.editIndex = index;

    const oldAnswer = this.answers.single[index].answer;
    this.inputNewQuestion.nativeElement.value = oldAnswer;
  }

  deleteAnswer(id: any){
    this.answers.single.splice(id, 1);
    this.onChangeAnswers.emit(this.answers);
  }

  handleChange(event: any){
    var value = event.target.value;

    this.answers.single.forEach((element, index) => {
      if(value == this.answers.single[index].value){
        this.answers.single.forEach((element, index) => {
          this.answers.single[index].correctAnswer = false;
        });

        this.answers.single[index].correctAnswer = true;
      }
    });

    console.log(this.answers.single)
    return

    this.onChangeAnswers.emit(this.answers);
  }

}
