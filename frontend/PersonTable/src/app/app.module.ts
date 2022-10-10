import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonsComponent } from './pages/persons/persons.component';
import { PersonComponent } from './pages/person/person.component';
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
import {CardModule} from 'primeng/card';
import { EditPersonComponent } from './component/edit-person/edit-person.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonsComponent,
    WithUnsortDirective,
    PersonComponent,
    EditPersonComponent

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
    CalendarModule,
    CardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
