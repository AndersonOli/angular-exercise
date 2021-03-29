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
