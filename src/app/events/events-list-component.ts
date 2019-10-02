import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service';
@Component({
    selector: 'events-list',
    templateUrl: './events-list-component.html'
})
export class EventsListComponent implements OnInit {
    eventObjects: any[];
    constructor(private eventService: EventService) {}

    ngOnInit() {
      this.eventObjects = this.eventService.getEvents();
    }

    handleEventClicked(data:any) {
        console.log('Event selected: ' + data.name);
    }
}