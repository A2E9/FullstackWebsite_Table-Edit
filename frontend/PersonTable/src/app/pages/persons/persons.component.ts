import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Table } from 'primeng/table';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})
export class PersonsComponent implements OnInit {
  persons: any;
  cols: any[];
  allStatus: {}[];
  allGeschlecht: {}[];
  selectedG!: [];

  _selectedColumns!: any[];
  AllSteuerklasse: {}[];
  @ViewChild('dt') table!: Table;
  allAnrede!: { label: string; value: string }[];
  AllNationalitaet: { label: string; value: string }[];

  constructor(
    private persServ: PersonsService
  ) {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'anrede', header: 'Anrede' },
      { field: 'name', header: 'Name' },
      { field: 'vorname', header: 'Vorname' },
      { field: 'geschlecht', header: 'Geschlecht' },
      { field: 'nationalitaet', header: 'Nationalität' },
      { field: 'strasse', header: 'Straße' },
      { field: 'plz', header: 'PLZ' },
      { field: 'ort', header: 'Ort' },
      { field: 'geburtsdatum', header: 'Geburtsdatum' },
      { field: 'abteilung', header: 'Abteilung' },
      { field: 'familienstand', header: 'Familienstand' },
      { field: 'gehalt', header: 'Gehalt' },
      { field: 'iban', header: 'IBAN' },
      { field: 'steuerklasse', header: 'Steuerklasse' },
    ];
    this.allStatus = [
      { label: 'Single', value: 'ledig' },
      { label: 'Married', value: 'verheiratet' },
      { label: 'Divorced', value: 'geschieden' },
    ];
    this.allGeschlecht = [
      // { label: 'Alle', value: null },
      { label: 'Weiblich', value: 'weiblich' },
      { label: 'Männlich', value: 'männlich' },
      { label: 'Divers', value: 'divers' },
      { label: 'Unbekannt', value: 'unbekannt' },
    ];

    this.allAnrede = [
      { label: 'Alle', value: 'null' },
      { label: 'Herr', value: 'Herr' },
      { label: 'Frau', value: 'Frau' },
    ];
    this.AllNationalitaet = [{ label: 'Leer', value: '' }];

    this.AllSteuerklasse = [
      { label: 'Alle', value: null },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
    ];
    this._selectedColumns = this.cols;
  }

  getOptNation() {
    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i].nationalitaet)
        this.AllNationalitaet.push({
          label: this.persons[i].nationalitaet,
          value: this.persons[i].nationalitaet,
        });
    }
    this.AllNationalitaet = this.AllNationalitaet.filter(
      (v, i, a) => a.findIndex((t) => t.label === v.label) === i
    );
  }

  ngOnInit(): void {
    //anrede,name, vorname, geschlecht, nationalitaet, strasse, plz, ort, geburtsdatum, abteilung, familienstand, gehalt, iban, steuerklasse
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
      this.getOptNation();
    });

    this._selectedColumns = JSON.parse(
      localStorage.getItem('selectedColumns') || '[]'
    );
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }
  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }
  saveInLocalStorage() {
    localStorage.setItem(
      'selectedColumns',
      JSON.stringify(this._selectedColumns)
    );
  }

  convertDate($event: any) {
    const eventDate = moment($event).format('DD.MM.YYYY');
    return eventDate;
  }
}
