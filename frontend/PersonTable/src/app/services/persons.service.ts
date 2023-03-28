import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PersonsService implements OnInit {
  persons: any;
  person: any;

  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getPersonTable() {
    return this.http.get('http://127.0.0.1:8000/api/personTable/')
    .pipe(
      tap((data: any) => {
        this.persons = data;

        this.persons.forEach((person: any) => {
          person.geburtsdatum = moment(
            person.geburtsdatum,
            'YYYY-MM-DD'
          ).format('DD.MM.YYYY');
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
        // this.localStore.saveObject('persons', this.persons);
        // return this.persons;
      })
    );
  }

  getPersonTable2() {
    return this.http.get('http://127.0.0.1:8000/api/personTable/').pipe(
      tap((data: any) => {
        this.persons = data;
        this.persons.forEach((person: any) => {
          person.name = person.name + ' ' + person.vorname;
          person.ort =
            person.plz + ' ' + person.ort + ' ' + person.nationalitaet;
          person.geburtsdatum = moment(
            person.geburtsdatum,
            'YYYY-MM-DD'
          ).format('DD.MM.YYYY');
        });
      })
    );
  }

  getPerson(id: number) {
    return this.http
      .get('http://127.0.0.1:8000/api/personTable/' + id + '/')
      .pipe(
        tap((data: any) => {
          this.person = data;
          this.person.geburtsdatum = moment(
            this.person.geburtsdatum,
            'YYYY-MM-DD'
          ).format('DD.MM.YYYY');
        })
      );
  }

  deletePerson(id: number) {
    return this.http
      .delete('http://127.0.0.1:8000/api/personTable/' + id + '/')
      .pipe(
        tap(() => {
          // this.route.navigate(['/persons']);
        })
      );
  }

  updatePerson(id: number, person: any) {
    //format date to YYYY-MM-DD
    person.geburtsdatum = moment(person.geburtsdatum, 'DD.MM.YYYY').format(
      'YYYY-MM-DD'
    );
    return this.http
      .put('http://127.0.0.1:8000/api/personTable/' + id + '/', person)
      .pipe(
        tap((data: any) => {
          this.person = data;
          console.log(data);
        })
      );
  }

  createPerson(person: any) {
    return this.http
      .post('http://127.0.0.1:8000/api/personTable/', person)
      .pipe(
        tap((data: any) => {
          this.person = data;
          console.log(data);
        })
      );
  }
}
