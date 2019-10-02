import {Component} from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list-component.html'
})
export class EventsListComponent {
    eventObjects: any[];
    
    //TODO: Not good practise to call long running service call in constructor
    constructor(private eventService: EventService) {
      this.eventObjects = eventService.getEvents();
    }
    handleEventClicked(data:any) {
        console.log('Event selected: ' + data.name);
    }
}