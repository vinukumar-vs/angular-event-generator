import { Subject } from "rxjs";

export interface IEvent {
    eventName: string;
    data: any;
    // subject:Subject<any>;// = new Subject();
    emit(data:any);
}
