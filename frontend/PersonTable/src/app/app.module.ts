import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { DatePipe } from '@angular/common';


import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {ProgressBarModule} from 'primeng/progressbar';
import {PaginatorModule} from 'primeng/paginator';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import { WithUnsortDirective } from './with-unsort.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonsComponent,
    WithUnsortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    HttpClientModule,
    MultiSelectModule,
    ProgressBarModule,
    PaginatorModule,
    DatePipe,
    InputMaskModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
