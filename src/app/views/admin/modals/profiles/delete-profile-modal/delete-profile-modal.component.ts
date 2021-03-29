import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-profile-modal',
  templateUrl: './delete-profile-modal.component.html',
  styleUrls: ['./delete-profile-modal.component.scss']
})
export class DeleteProfileModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  closeModal() {
      this.onClose.emit(true);
  }

}
