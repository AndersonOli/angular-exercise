import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-profile-modal',
  templateUrl: './add-profile-modal.component.html',
  styleUrls: ['./add-profile-modal.component.scss']
})
export class AddProfileModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onAdd: EventEmitter<any> = new EventEmitter();

  closeModal() {
    this.onClose.emit(true);
  }

  addCandidate(data: any){
    this.onAdd.emit(data);
  }

  onSubmit(event: any){
    event.preventDefault();

    const data = {
      code: event.target.code.value,
      description: event.target.description.value,
      dificulty: event.target.dificulty.value
    }

    this.addCandidate(data);
  }
}

