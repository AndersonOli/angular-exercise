import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-question-modal',
  templateUrl: './delete-question-modal.component.html',
  styleUrls: ['./delete-question-modal.component.scss']
})
export class DeleteQuestionModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<boolean> = new EventEmitter();

  closeModal() {
    this.onClose.emit(true);
  }

  deleteQuestion(){
    this.onDelete.emit(true);
  }

}
