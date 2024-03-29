import {Component, OnInit} from '@angular/core'
import { EventService} from './shared/event.service'
import { IEvent} from './shared/event.model'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
    eventObjects: IEvent[];
    constructor(private eventService: EventService, private toastrService: ToastrService,
        private route: ActivatedRoute) {}

    ngOnInit() {
        //step3: we can access that events from routes in our component
        //Check diff with last commit, now it shows entire component will load after data arrives
        this.eventObjects = this.route.snapshot.data['eventsObserved'];
    }

    handleEventClicked(data:IEvent) {
        console.log(data);
        this.toastrService.success(data.name);
    }
}