import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss']
})
export class EditProfileModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onSave: EventEmitter<any> = new EventEmitter();

  @Input()
  profile: any;

  closeModal() {
    this.onClose.emit(true);
  }

  saveProfile(data: any){
    this.onSave.emit(data);
  }

  onSubmit(event: any){
    event.preventDefault();

    const data = {
      code: event.target.code.value,
      name: event.target.name.value,
      description: event.target.description.value,
      dificulty: event.target.dificulty.value
    };

    this.saveProfile(data);
  }
}
