import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  inputAnswerText: any = '';

  @Output()
  onChangeAnswerText: EventEmitter<string> = new EventEmitter();

  changeText(text: any){
    this.inputAnswerText = text.target.value;
    this.onChangeAnswerText.emit(this.inputAnswerText);
  }

}
