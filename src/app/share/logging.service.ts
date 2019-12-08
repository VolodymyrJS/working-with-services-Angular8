import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  loggingStatusChanges(status: string) {
    console.log('Status has changed for ' + status);
  }
}
