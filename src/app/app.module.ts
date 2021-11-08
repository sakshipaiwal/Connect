import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JournalComponent } from './journal/journal.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TaskComponent } from './tracker/task/task.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/commons/auth/auth-interceptor.interceptor';
import { SearchComponent } from './journal/search/search.component';
import { JournalEntryComponent } from './journal/journal-entry/journal-entry.component';
import { JournalListComponent } from './journal/journal-list/journal-list.component';
import { JournalViewComponent } from './journal/journal-view/journal-view.component';
import { LoginComponent } from './login/login.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalComponent,
    TrackerComponent,
    TaskComponent,
    SearchComponent,
    JournalEntryComponent,
    JournalListComponent,
    JournalViewComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    HttpClientModule
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
    },
    CookieService,
    
    {provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true

  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
