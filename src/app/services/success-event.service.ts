import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppEvents } from '../interfaces/app-events';
import { IEvent } from '../interfaces/ievent';
import { BaseEvent } from './base-event';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class SuccessEventService extends BaseEvent {
  eventName = AppEvents.SUCCESS;
}
