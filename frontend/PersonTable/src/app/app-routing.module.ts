import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPersonComponent } from './component/edit-person/edit-person.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonComponent } from './pages/person/person.component';
import { PersonsComponent } from './pages/persons/persons.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'person/:id', component: PersonComponent },
  // { path: '**', redirectTo: '/home' },
  { path: 'person/edit/:id', component: EditPersonComponent },
  { path: 'person/edit', component: EditPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
