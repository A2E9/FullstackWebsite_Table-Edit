import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  personID: number = 0;
  persons: any;
  person: any;
  constructor(
    private route: ActivatedRoute,
    private persServ: PersonsService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => (this.personID = params['id']));
  }

  ngOnInit() {
    this.persServ.getPersons().subscribe((data: any) => {
      this.persons = data;
      this.persons.forEach((person: any) => {
        person.geburtsdatum = moment(person.geburtsdatum, 'YYYY-MM-DD').format(
          'DD.MM.YYYY'
        );
      });

      this.persons.forEach((person: any) => {
        person.gehalt = person.gehalt + ' €';
      });
      this.persons.forEach((person: any) => {
        if (person.geschlecht === 'w') {
          person.geschlecht = 'weiblich';
        }
        if (person.geschlecht === 'm') {
          person.geschlecht = 'männlich';
        }
        if (person.geschlecht === 'd') {
          person.geschlecht = 'divers';
        }
        if (person.geschlecht === 'u') {
          person.geschlecht = 'unbekannt';
        }
      });
      this.persons = data.filter((personA: any) => {
        if (personA.id == this.personID) this.person = personA;
      }); //Error undefined
    });
  }

  lastPage() {
    window.history.back();
    //router to /person
  }
  //Go to edit page and give the person object
  editPerson() {
    //ngIf="edit" disable full person to give Input
    //
    //router to /edit-person

    // this.router.navigate(['/edit-person', this.person.id])

    // this.router.navigate(['person/:id/edit'], {//Doenst change state to edit not bad
    //   queryParams: { id: this.person.id },
    //   skipLocationChange: false,
      
    // });
    // window.history.pushState('', '', '***************************' + this.person.id); //page reload Error
  }
}
