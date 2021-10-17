import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', pathMatch: 'full', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'home/journal', component : JournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
