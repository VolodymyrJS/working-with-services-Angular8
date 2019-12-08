import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  constructor(private loggingSevice: LoggingService) {}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onStatusChanged = new EventEmitter<string>();

  addAccout(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingSevice.loggingStatusChanges(status);
  }

  changeStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingSevice.loggingStatusChanges(status);
  }
}
