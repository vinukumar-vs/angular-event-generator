import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AppEvents } from '../interfaces/app-events';
import { IEvent } from '../interfaces/ievent';
import { BaseEvent } from './base-event';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Extends abstract class BaseEvent
 * We have to define the `eventname` which is abstract property
 * Override the emit(data) method, if we have custom logic to generate the data
 */
export class ErrorEventService extends BaseEvent {
  eventName = AppEvents.ERROR;
  
  /**
   * Only when we want to customize/change the data, then overrife the abstract "emit(data)" method
   * Overriding the default "emit()"
   * @param data 
   */
  emit(data:any){
    // Add custom logic to modidy the data 
    data.traceId = data.traceId? data.traceId : Math.random();
    super.emit(data);
  }
}
