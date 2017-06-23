import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CreateBookComponent } from './create-book/create-book.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
