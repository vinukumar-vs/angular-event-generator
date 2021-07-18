import { AppEvents } from '../interfaces/app-events';
import { ErrorEventService } from '../services/error-event.service';

export class EventFactoryService {
  
  constructor() {  }

  /**
   * Library/Application will call this method to generate specific event based on condition where they want to generate the event.service
   * 
   * @param eventName 
   * @param data 
   */
  trigger(eventName, data) {
    switch(eventName) {
      case AppEvents.ERROR :
        // Generate specific event instance based on EventName
        let errorEventSerObj = new ErrorEventService();
        errorEventSerObj.emit(data);
        break;
      case AppEvents.SUCCESS : 
        console.log("No implementation");
        break;
      default :  
        console.log(`There is no implementation for the event: ${eventName}`);
        break;;
    }
  }
}
