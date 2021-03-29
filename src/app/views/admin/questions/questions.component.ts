import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  eventsSubject: Subject<string> = new Subject<string>();

  actualTab: string = 'python';

  alterTab(tab: string) {
    this.eventsSubject.next(tab);
  }

  changeTab(tab: string) {
    this.alterTab(tab);
    this.actualTab = tab;
  }

  // delete modal
  showDeleteModal: boolean = false;

  modalDeleteClosed(isClosed: boolean) {
    this.showDeleteModal = false;
  }

  openDeleteModal(){
    this.showDeleteModal = true;
  }

  // edit modal
  showEditModal: boolean = false;

  modalEditClosed(isClosed: boolean) {
    this.showEditModal = false;
  }

  openEditModal(){
    this.showEditModal = true;
  }
  
  // add modal
  showAddModal: boolean = false;

  modalAddClosed(isClosed: boolean) {
    this.showAddModal = false;
  }

  openAddModal(){
    this.showAddModal = true;
  }

}
