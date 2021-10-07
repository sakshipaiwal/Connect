import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JournalComponent } from './journal/journal.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { SearchComponent } from './journal/search/search.component';
import { JournalEntryComponent } from './journal/journal-entry/journal-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalComponent,
    TaskTrackerComponent,
    SearchComponent,
    JournalEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
