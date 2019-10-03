import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import {map} from 'rxjs/operators'

@Injectable()
export class EventsListResolverService implements Resolve<any> {
    constructor(private eventService: EventService){}
    resolve() {
        //We are returning observables here, so that angular observes it
        //Using Subscriber, will return subscribers not observables
        //Step1: Resolver get events from the eventservice
        return this.eventService.getEvents().pipe(map(events => events));
    }
}