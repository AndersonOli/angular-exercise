import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-question-table',
  templateUrl: './admin-question-table.component.html',
  styleUrls: ['./admin-question-table.component.scss']
})
export class AdminQuestionTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
