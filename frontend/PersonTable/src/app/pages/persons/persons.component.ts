import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { Table } from 'primeng/table';
import { PersonsService } from '../../services/persons.service';
import { Router } from '@angular/router';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class PersonsComponent implements OnInit {
  selectedPersons: any;
  persons: any;
  cols: any[];
  allStatus: {}[];
  allGeschlecht: {}[];
  selectedG!: [];
  _selectedColumns!: any[];
  AllSteuerklasse: {}[];
  @ViewChild('dt') table!: Table;
  allAnrede!: any[];
  AllNationalitaet: any[];
  newCols!: any[];
  submitted!: boolean;
  personDia!: boolean;
  person!: any;
  steuerklassen: any[];
  anreden: any[];
  geschlechten: any[];
  person0: any;

  constructor(
    private router: Router,
    private personService: PersonsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
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
    this.newCols = [
      { field: 'anrede', header: 'Anrede' },
      { field: 'name', header: 'Person' },
      { field: 'ort', header: 'Ort' },
      { field: 'geburtsdatum', header: 'Geburtsdatum' },
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
    this.AllSteuerklasse = [
      { label: 'Alle', value: null },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
    ];
    this.anreden = [
      { label: 'Keine', value: null },
      { label: 'Herr', value: 'Herr' },
      { label: 'Frau', value: 'Herr' },
    ];
    this.steuerklassen = [
      { label: '1: ledig, geschieden...', value: 1 },
      { label: '2: alleinerziehend', value: 2 },
      { label: '3: verheiratet höher Eink.', value: 3 },
      { label: '4: verheiratet gleich EInk.', value: 4 },
      { label: '5: verheiratet gerin. Eink.', value: 5 },
      { label: '6: Zweitjob', value: 6 },
    ];
    this.geschlechten = [
      { label: 'Weiblich', value: 'w' },
      { label: 'Männlich', value: 'm' },
      { label: 'Divers', value: 'd' },
      { label: 'Unbekannt', value: 'u' },
    ];

    this.AllNationalitaet = [{ label: 'Leer', value: '' }];
    this._selectedColumns = this.cols;
  }

  ngOnInit(): void {
    //   this.personService.getPersonTable().subscribe( (data) => {
    //   this.persons = data;
    //   this.getOptNation();
    // });
    this.personService.getPersonTable2().subscribe((data) => {
      this.persons = data;
      console.log(this.persons);
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

  navPerson(pID: any) {
    this.router.navigate(['/person', pID]);
  }

  deletePerson(pID: any) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this person?',
      header: 'Delete Person',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.personService.deletePerson(pID).subscribe((data) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Person Deleted',
            life: 3000,
          });

          this.redirectTo('/persons');
        });
      },
    });
  }

  deleteSelectePersons() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',

      accept: () => {
        this.selectedPersons.forEach((person: any) => {
          this.personService.deletePerson(person.id).subscribe((data) => {
            console.log(data);
          });
        });
        this.redirectTo('/persons'); /////////////////////////////////////////////////////////////bag
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: false })
      .then(() => this.router.navigate([uri]));
    //reload page
    window.location.reload();
  }

  newPerson() {
    this.person = {};
    this.submitted = false;
    this.personDia = true;
  }

  hideDialog() {
    this.personDia = false;
    this.submitted = false;
  }

  // savePerson() {
  //   this.submitted = true;

  //   //check if this values are not null or ''

  //   // let a = document.body.classList.contains('bbb');
  //   // let b = document.getElementsByClassName('p-error').length;
  //   // const isEmpty = !Object.values(this.person).some((x) => x !== null && x !== '');

  //   if (
  //     this.person.vorname.trim() &&
  //     this.person.name.trim() &&
  //     this.person.geburtsdatum &&
  //     this.person.geschlecht &&
  //     this.person.familienstand &&
  //     this.person.strasse.trim() &&
  //     this.person.plz.trim() &&
  //     this.person.ort.trim() &&
  //     this.person.steuerklasse &&
  //     this.person.gehalt &&
  //     this.person.iban.trim()
  //   ) {
  //     //change dateformat to yyyy-mm-dd
  //     this.person.geburtsdatum = moment(this.person.geburtsdatum).format(
  //       'YYYY-MM-DD'
  //     );
  //     this.personService.createPerson(this.person).subscribe((data) => {
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Person Created',
  //         life: 3000,
  //       });
  //       this.redirectTo('/person/' + data.id);
  //     });
  //   }
  // }
}
