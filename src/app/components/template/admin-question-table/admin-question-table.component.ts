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

  id = 0;

  questions = [
    {
      code: '001',
      description: 'Description 1',
      dificulty: 'HARD',
      theme: 'Python',
      type: 'Single answer',
      instructions: 'I dont know',
      answers: {
        single: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        multiple: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: true,
            answer: "Here's the third question"
          }
        ],
        text: 'This is a answer by text',
        code: 'This is a answer by code'
      },
    },
    {
      code: '002',
      description: 'Description 2',
      dificulty: 'MEDIUM',
      theme: 'Angular',
      type: 'Multiple answer',
      instructions: 'I dont know',
      answers: {
        single: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        multiple: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 4,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        text: 'This is a answer by text',
        code: 'This is a answer by code'
      },
    },
    {
      code: '003',
      description: 'Description 3',
      dificulty: 'EASY',
      theme: 'Java',
      type: 'Code',
      instructions: 'I dont know',
      answers: {
        single: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        multiple: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 4,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        text: 'This is a answer by text',
        code: 'This is a answer by code'
      },
    },
    {
      code: '004',
      description: 'Description 4',
      dificulty: 'EASY',
      theme: 'Postegres',
      type: 'Text',
      instructions: 'I dont know',
      answers: {
        single: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        multiple: [
          {
            value: 1,
            correctAnswer: false,
            answer: "Here's the first question"
          },
          {
            value: 2,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 3,
            correctAnswer: true,
            answer: "Here's the second question"
          },
          {
            value: 4,
            correctAnswer: false,
            answer: "Here's the third question"
          }
        ],
        text: 'This is a answer by text',
        code: 'This is a answer by code'
      },
    },
  ]

  // delete modal
  showDeleteModal: boolean = false;

  modalDeleteClosed(isClosed: boolean) {
    this.showDeleteModal = false;
  }

  onDeleteQuestion(data: boolean){
    if(data){
      this.questions.splice(this.id, 1);
    }

    //closes modal
    this.modalDeleteClosed(true);
  }

  openDeleteModal(id: any){
    this.id = id;
    this.showDeleteModal = true;
  }

  // edit modal
  showEditModal: boolean = false;

  modalEditClosed(isClosed: boolean) {
    this.showEditModal = false;
  }

  openEditModal(id: any){
    this.id = id;
    this.showEditModal = true;
  }

  onEditQuestion(data: any){
    //updates the data
    this.questions[this.id] = data;

    //closes modal
    this.modalEditClosed(true);
  }
  
  // add modal
  showAddModal: boolean = false;

  modalAddClosed(isClosed: boolean) {
    this.showAddModal = false;
  }

  openAddModal(){
    this.showAddModal = true;
  }

  onAddQuestion(data: any){
    // insert data
    this.questions.push(data);

    // closes modal
    this.modalAddClosed(true);
  }

   // runs every time that table changes 
   trackQuestions(){}
}
