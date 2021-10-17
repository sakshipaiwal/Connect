import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JournalComponent } from './journal/journal.component';
import { TaskTrackerComponent } from './task-tracker/task-tracker.component';
import { SearchComponent } from './journal/search/search.component';
import { JournalEntryComponent } from './journal/journal-entry/journal-entry.component';
import { JournalListComponent } from './journal/journal-list/journal-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JournalViewComponent } from './journal/journal-view/journal-view.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalComponent,
    TaskTrackerComponent,
    SearchComponent,
    JournalEntryComponent,
    JournalListComponent,
    JournalViewComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '260976017655-c9g101s3b7mb9vet3q86oq68i3f6rj09.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
