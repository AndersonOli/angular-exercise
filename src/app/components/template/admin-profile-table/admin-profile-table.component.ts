import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile-table',
  templateUrl: './admin-profile-table.component.html',
  styleUrls: ['./admin-profile-table.component.scss']
})
export class AdminProfileTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showChangeDesc: boolean = false;

  openChangeDesc(){
    this.showChangeDesc = !this.showChangeDesc;
  }

  // generating table
  profiles = [
    {
      code: '001',
      description: 'Description 1',
      dificulty: 'HARD'
    },
    {
     code: '002',
     description: 'Description 2',
     dificulty: 'MEDIUM'
    },
    {
      code: '003',
      description: 'Description 3',
      dificulty: 'EASY'
    }
  ];
  
  id = 0;

  // add modal
  showAddModal: boolean = false;

  modalAddClosed(isClosed: boolean) {
    this.showAddModal = false;
  }

  openAddModal(){
    this.showAddModal = true;
  }

  addProfile(data: any){
    // insert data
    this.profiles.push(data);

    //closes modal
    this.modalAddClosed(true);
  }

  //edit modal
  showEditModal: boolean = false;

  modalEditClosed(isClosed: boolean) {
    this.showEditModal = false;
  }

  openEditModal(id: any){
    this.id = id;
    this.showEditModal = true;
  }

  onSaveProfile(data: any){
    // updates the data
    this.profiles[this.id] = data;

    // closes modal
    this.modalEditClosed(true);
  }

  // delete modal
  showDeleteModal: boolean = false;

  modalDeleteClosed(isClosed: boolean) {
    this.showDeleteModal = false;
  }

  openDeleteModal(id: any){
    this.id = id;
    this.showDeleteModal = true;
  }

  onDeleteProfile(){
    // remove the candidate
    this.profiles.splice(this.id, 1);

    // closes modal
    this.modalDeleteClosed(true);
  }

  // runs every time that the table changes 
  trackProfiles(){}
}
