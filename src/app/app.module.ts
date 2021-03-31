import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './views/user/user.component';
import { AdminComponent } from './views/admin/admin.component';
import { MainComponent } from './views/user/main/main.component';
import { ConclusionComponent } from './views/user/conclusion/conclusion.component';
import { EvaluationComponent } from './views/user/evaluation/evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserHeaderComponent } from './components/template/user-header/user-header.component';
import { AdminHeaderComponent } from './components/template/admin-header/admin-header.component';
import { CandidateComponent } from './views/admin/candidate/candidate.component';
import { QuestionsComponent } from './views/admin/questions/questions.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { AdminCandidateQuestionsComponent } from './components/template/admin-candidate-questions/admin-candidate-questions.component';
import { DeleteCandidateModalComponent } from './views/admin/modals/candidate/delete-candidate-modal/delete-candidate-modal.component';
import { EditCandidateModalComponent } from './views/admin/modals/candidate/edit-candidate-modal/edit-candidate-modal.component';
import { AddCandidateModalComponent } from './views/admin/modals/candidate/add-candidate-modal/add-candidate-modal.component';
import { AddQuestionModalComponent } from './views/admin/modals/questions/add-question-modal/add-question-modal.component';
import { EditQuestionModalComponent } from './views/admin/modals/questions/edit-question-modal/edit-question-modal.component';
import { DeleteQuestionModalComponent } from './views/admin/modals/questions/delete-question-modal/delete-question-modal.component';
import { AdminQuestionTableComponent } from './components/template/admin-question-table/admin-question-table.component';
import { AdminProfileTableComponent } from './components/template/admin-profile-table/admin-profile-table.component';
import { DeleteProfileModalComponent } from './views/admin/modals/profiles/delete-profile-modal/delete-profile-modal.component';
import { EditProfileModalComponent } from './views/admin/modals/profiles/edit-profile-modal/edit-profile-modal.component';
import { AddProfileModalComponent } from './views/admin/modals/profiles/add-profile-modal/add-profile-modal.component';
import { LoginComponent } from './views/user/login/login.component';
import { AdminLoginComponent } from './views/admin/admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    MainComponent,
    ConclusionComponent,
    EvaluationComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    CandidateComponent,
    QuestionsComponent,
    ProfileComponent,
    AdminCandidateQuestionsComponent,
    DeleteCandidateModalComponent,
    EditCandidateModalComponent,
    AddCandidateModalComponent,
    AddQuestionModalComponent,
    EditQuestionModalComponent,
    DeleteQuestionModalComponent,
    AdminQuestionTableComponent,
    AdminProfileTableComponent,
    DeleteProfileModalComponent,
    EditProfileModalComponent,
    AddProfileModalComponent,
    LoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
