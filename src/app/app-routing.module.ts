import { AdminCandidateQuestionsComponent } from './components/template/admin-candidate-questions/admin-candidate-questions.component';
import { QuestionsComponent } from './views/admin/questions/questions.component';
import { ProfileComponent } from './views/admin/profile/profile.component';
import { CandidateComponent } from './views/admin/candidate/candidate.component';
import { EvaluationComponent } from './views/user/evaluation/evaluation.component';
import { ConclusionComponent } from './views/user/conclusion/conclusion.component';
import { MainComponent } from './views/user/main/main.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './views/admin/admin.component';
import { UserComponent } from './views/user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import { AdminLoginComponent } from './views/admin/admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'user', 
    component: UserComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'evaluation', component: EvaluationComponent},
      {path: 'conclusion', component: ConclusionComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: '', component: AdminLoginComponent},
      {path: 'candidate', component: CandidateComponent},
      {path: 'questions', component: QuestionsComponent},
      {path: 'profiles', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
