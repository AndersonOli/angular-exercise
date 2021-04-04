import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  inputAnswerCode: any = '';

  @Output()
  onChangeAnswerCode: EventEmitter<string> = new EventEmitter();

  changeCode(code: any){
    this.inputAnswerCode = code.target.value;
    this.onChangeAnswerCode.emit(this.inputAnswerCode);
  }

}
