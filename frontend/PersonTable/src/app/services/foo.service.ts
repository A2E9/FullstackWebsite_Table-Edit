import { Injectable } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor(private confirmationService: ConfirmationService) { }

  confirm(): void {
    this.confirmationService.confirm({
      key: 'positionDialog',
      message: 'some message',
      header: 'Warning',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'ok',
      rejectVisible: false,
      accept: () => {
        console.log('accept');
      },
    });
  }
}
