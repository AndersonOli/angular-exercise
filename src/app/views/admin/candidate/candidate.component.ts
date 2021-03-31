import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  isOn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // change the tab
  eventsSubject: Subject<string> = new Subject<string>();
  actualTab: string = 'python';

  alterTab(tab: string) {
    this.eventsSubject.next(tab);
  }

  changeTab(tab: string) {
    this.alterTab(tab);
    this.actualTab = tab;
  }

  openResult(){
    this.isOn = !this.isOn;
  }

  //generating table 
  candidates = [
    {
      id: 1,
      name: 'Candidate 1',
      created: '12/06/19',
      status: 'pendent',
      email: 'candidato1@mail.com'
    },
    {
      id: 2,
      name: 'Candidate 2',
      created: '12/06/21',
      status: 'done',
      email: 'candidato2@mail.com'
    },
    {
      id: 3,
      name: 'Candidate 3',
      created: '03/01/20',
      status: 'going',
      email: 'candidato3@mail.com'
    },
  ];

  // the id whom will be changed
  id = 0;

  // delete modal
  showDeleteModal: boolean = false;

  modalDeleteClosed(isClosed: boolean) {
    this.showDeleteModal = false;
  }

  onDeleteCandidate(){
    // remove the candidate
    this.candidates.splice(this.id, 1);

    // close the modal
    this.modalDeleteClosed(true);
  }

  openDeleteModal(id: any){
    this.id = id;
    this.showDeleteModal = true;
  }

  // edit modal
  showEditModal: boolean = false;

  modalEditClosed() {
    this.showEditModal = false;
  }

  openEditModal(id: any){
    this.id = id;
    this.showEditModal = true;
  }

  onEditCandidate(data: any){
    this.modalEditClosed();
    
    this.candidates[this.id].name = data.name;
    this.candidates[this.id].email = data.email;
  }

  // add modal
  showAddModal: boolean = false;

  modalAddClosed(isClosed: boolean) {
    this.showAddModal = false;
  }

  openAddModal(){
    this.showAddModal = true;
  }

  addCandidate(data: any){
    const actualDate = new Date();

    actualDate.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});

    const todayDay   = actualDate.getDate() < 10 ? '0' + actualDate.getDate() : actualDate.getDate();
    const todayMouth = (actualDate.getMonth() + 1) < 10 ? '0' + (actualDate.getMonth() + 1) : (actualDate.getMonth() + 1);
    const todayYear  = actualDate.getFullYear().toString().substr(2);

    data.created = todayDay + '/' + todayMouth + '/' + todayYear;

    this.candidates.push(data);
    this.modalAddClosed(true);
  }

  // runs every time that something changes on the table
  trackCandidates(){}
}
