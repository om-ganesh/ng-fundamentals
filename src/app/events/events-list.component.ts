import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    eventObjects: any;
    constructor(private eventService: EventService, private toastrService: ToastrService) {}

    ngOnInit() {
      this.eventService.getEvents().subscribe(
          events => { this.eventObjects = events }
      );
    }

    handleEventClicked(data:any) {
        this.toastrService.success(data.name);
    }
}