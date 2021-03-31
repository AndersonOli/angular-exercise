import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-delete-candidate-modal',
  templateUrl: './delete-candidate-modal.component.html',
  styleUrls: ['./delete-candidate-modal.component.scss']
})
export class DeleteCandidateModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter();

  closeModal() {
      this.onClose.emit(true);
  }

  deleteCandidate(){
    this.onDelete.emit(true);
  }
}
