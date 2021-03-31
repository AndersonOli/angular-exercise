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
      id: event.target.id.value,
      name: event.target.name.value,
      email: event.target.email.value,
      status: event.target.status.value
    }

    this.addCandidate(data);
  }

}
