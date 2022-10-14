import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from 'src/app/services/persons.service';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [MessageService, ConfirmationService],
  animations: [
    trigger('errorState', [
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      transition('visible => hidden', animate('400ms ease-in')),
      transition('hidden => visible', animate('400ms ease-out')), //////////////////////////////////////
    ]),
  ],
})
export class PersonComponent implements OnInit {
  personID: number = 0;
  persons: any;
  person!: any;
  personFake!: any;
  display: boolean = false;
  position!: string;
  submitted: boolean = false;

  ccName: RegExp = /^[A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF_\.\-\_ /]+$/;
  ccDigits: RegExp = /[0-9]$/;
  ccIBAN: RegExp = /^DE\d{32}$/;
  ccDate: RegExp = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  cc: string = '';
  personDia!: boolean;
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
    this.route.params.subscribe((params) => (this.personID = params['id']));

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

  ngOnInit() {
    this.persServ.getPerson(this.personID).subscribe({
      next: (v: any) => {
        this.person = v;
        // this.localStore.saveObject('username', v.user_info.username);
      },
      error: (e: any) => {
        if (e.status == 400) {
          this.router.navigate(['/persons']);
        } else if (e.status == 500) {
          console.log('Server error');
        } else if (e.status == 404) {
          console.log('Not found');
        }
      },
      complete: () => {},
    });
  }

  lastPage() {
    // window.history.back();
    this.router.navigate(['/persons']);
  }

  editPerson() {
    // this.router.navigate(['/person/edit/' + this.personID]); //edit-site person/edit/1
    //   // window.history.pushState('', '', '***************************' + this.person.id); //page reload Error
    this.display = true;
    this.submitted = false;
    this.personDia = true;
  }

  confirm(position: string) {
    this.position = position;
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
        this.display = false;
        this.personDia = false;
        this.submitted = false;
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
  }

  cancel(position: string) {
    this.position = position;
    this.redirectTo('/person/' + this.personID);
    this.display = false;

    this.personDia = false;
    this.submitted = false;
  }

  deletePerson(position: string) {
    this.position = position;
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.persServ.deletePerson(this.personID).subscribe((data) => {
          this.person = data;
        });
        this.redirectTo('/persons');
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
        }
      },
      key: 'positionDialog',
    });
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
    //reload page
    // window.location.reload();
  }

  newPerson() {
    this.submitted = false;
    this.personDia = true;
  }

  hideDialog() {
    this.personDia = false;
    this.submitted = false;
  }
}
