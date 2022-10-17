import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { PersonsService } from 'src/app/services/persons.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class EditComponent implements OnInit {
  @Input() person!: any;
  @Input() submitted: boolean = false;
  @Input() personDia!: boolean;
  @Input() personID: any;
  @Input() position: any;
  @Input() positionDialog = 'positionDialog';
  @Input() newPerson!: boolean;

  @Output() personChange = new EventEmitter();
  @Output() personDiaChange = new EventEmitter();

  anreden: any[];
  steuerklassen: any[];
  geschlechten: any[];

  constructor(
    private route: ActivatedRoute,
    private persServ: PersonsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.anreden = [
      { label: 'Keine', value: null },
      { label: 'Herr', value: 'Herr' },
      { label: 'Frau', value: 'Frau' },
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
  }

  ngOnInit(): void {}

  confirm(position: string) {
    this.position = position;
    this.submitted = true;

    if (
      this.person.vorname.trim() &&
      this.person.name.trim() &&
      this.person.geburtsdatum &&
      this.person.geschlecht &&
      this.person.familienstand &&
      this.person.strasse.trim() &&
      this.person.plz.trim() &&
      this.person.ort.trim() &&
      this.person.steuerklasse &&
      this.person.gehalt &&
      this.person.iban.trim()
    ) {
      if(!this.newPerson){
      this.confirmationService.confirm({
        message: 'Do you want to confirm this record?',
        header: 'Confirmation',
        icon: 'pi pi-spin pi-info-circle',
        accept: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'Record confirmed',
          });
          this.persServ
            .updatePerson(this.personID, this.person)
            .subscribe((data) => {
              this.person = data;
            });
          this.personDia = false;
          this.personChange.emit(this.person);
          this.personDiaChange.emit(this.personDia);
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
        key: 'positionDialog',
      });
    }else{
      this.person.geburtsdatum = moment(this.person.geburtsdatum).format(
        'YYYY-MM-DD'
      );
      this.persServ.createPerson(this.person).subscribe((data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Person Created',
          life: 3000,
        });
        this.redirectTo('/person/' + data.id);
      });
    
    }
    }
  }

  savePerson() {
    this.submitted = true;

    //check if this values are not null or ''

    // let a = document.body.classList.contains('bbb');
    // let b = document.getElementsByClassName('p-error').length;
    // const isEmpty = !Object.values(this.person).some((x) => x !== null && x !== '');

    if (
      this.person.vorname.trim() &&
      this.person.name.trim() &&
      this.person.geburtsdatum &&
      this.person.geschlecht &&
      this.person.familienstand &&
      this.person.strasse.trim() &&
      this.person.plz.trim() &&
      this.person.ort.trim() &&
      this.person.steuerklasse &&
      this.person.gehalt &&
      this.person.iban.trim()
    ) {
      //change dateformat to yyyy-mm-dd
      
    }
  }

  cancel(position: string) {
    // this.position = position;
    this.redirectTo('/person/' + this.personID);

    // this.display = false;
    this.personDia = false;
    this.submitted = false;
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
    //reload page
    // window.location.reload();
  }
}
