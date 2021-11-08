import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';
import { TrackerComponent } from './tracker/tracker.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', component : LoginComponent},
  {path : 'login', pathMatch: 'full', component : LoginComponent},
  {path : 'home/journal', component : JournalComponent},
  {path : 'home/tracker', component : TrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
