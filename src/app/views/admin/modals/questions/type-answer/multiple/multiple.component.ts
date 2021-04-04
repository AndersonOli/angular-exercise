import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.answers = this.inputAnswers;
  }

  @Output()
  onChangeAnswersMultiple: EventEmitter<any> = new EventEmitter();

  @Input()
  inputAnswers: any;

  answers = {
    multiple: [
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
    // if(this.editMode){
    //   const answer = {
    //     value: this.answers.multiple[this.editIndex].value,
    //     correctAnswer: this.answers.multiple[this.editIndex].correctAnswer,
    //     answer: this.inputNewQuestion.nativeElement.value
    //   };

    //   this.answers.multiple[this.editIndex] = answer;
    //   this.inputNewQuestion.nativeElement.value = '';

    //   this.editMode = false;
    //   this.editIndex = 0;

    //   this.onChangeAnswersMultiple.emit(this.answers);

    //   return;
    // }

    var answerValue = 0;

    //add
    if(this.sizeObj(this.answers.multiple) > 0){
      answerValue = (this.answers.multiple[this.sizeObj(this.answers.multiple) - 1].value);
    }
    
    const answer = {
      value: (answerValue + 1),
      correctAnswer: false,
      answer: this.inputNewQuestion.nativeElement.value
    };

    if(this.sizeObj(this.answers.multiple) === 0){
      this.answers.multiple = [answer];
    } else {
      this.answers.multiple.push(answer);
    }

    this.inputNewQuestion.nativeElement.value = '';

    console.log(this.answers);
    return

    this.onChangeAnswersMultiple.emit(this.answers);
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

    const oldAnswer = this.answers.multiple[index].answer;
    this.inputNewQuestion.nativeElement.value = oldAnswer;
  }

  deleteAnswer(id: any){
    this.answers.multiple.splice(id, 1);
    this.onChangeAnswersMultiple.emit(this.answers);
  }

  handleChange(event: any){
    var value = event.target.value;

    this.answers.multiple.forEach((element, index) => {
      if(value == this.answers.multiple[index].value){
        this.answers.multiple[index].correctAnswer = event.target.checked;
      }
    });

    this.onChangeAnswersMultiple.emit(this.answers);
  }

}
