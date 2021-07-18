import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { EventFactoryService } from './factory/event-factory.service';
import { AppEvents } from './interfaces/app-events';
import { ErrorEventService } from './services/error-event.service';
import { EventService } from './services/event.service';
import { SuccessEventService } from './services/success-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  subscription: Subscription;

  title = 'Event Generator';

  constructor(eventFac: EventFactoryService, eventServ: EventService) {
    this.subscription = EventService.events(AppEvents.ERROR).subscribe(err => {
      console.log("Error Event", err);
    })

    // Trigger error event - 1st
    eventFac.trigger(AppEvents.ERROR, {err: 400})

    // Trigger error event - 2nd
    eventFac.trigger(AppEvents.ERROR, {msg: "Generate error event"})

    // Trigger Success event. But we dont have subscription & implementation for this eventName. So it will not print in console.
    eventFac.trigger(AppEvents.SUCCESS, {Success: 200})
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
