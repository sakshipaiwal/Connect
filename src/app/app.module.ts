import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JournalComponent } from './journal/journal.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TaskComponent } from './tracker/task/task.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/commons/auth/auth-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JournalComponent,
    TrackerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true

  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
