import { IEvent } from "../interfaces/ievent";
import { EventService } from "./event.service";

export abstract class BaseEvent implements IEvent{
    // All extending classes should define this property "eventName"
    public abstract eventName = "default";
    data = {};

    constructor() { }

    /**
     * Default/Common logic for all extending classes. 
     * This method has to override by extending classes for any data maniputation
     * @param data 
     */
    emit(data: any) {
        this.data = data
        EventService.events(this.eventName).next(this);
    }
}
