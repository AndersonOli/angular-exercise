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

const routes: Routes = [
  {path: '', component: UserComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/main', component: MainComponent},
  {path: 'user/evaluation', component: EvaluationComponent},
  {path: 'user/conclusion', component: ConclusionComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/candidate', component: CandidateComponent},
  {path: 'admin/questions', component: QuestionsComponent},
  {path: 'admin/profiles', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
