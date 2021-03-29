import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-candidate-modal',
  templateUrl: './add-candidate-modal.component.html',
  styleUrls: ['./add-candidate-modal.component.scss']
})
export class AddCandidateModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeModal() {
      this.onClose.emit(true);
  }

}
