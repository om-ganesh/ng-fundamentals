import {Component, OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'

@Component( {
    templateUrl: './event-details.component.html',
    styles:[`
        .container: {padding-left:20px; padding-right:20px;}
        .event-image {height:100px}
    `]
})
export class EventDetailsComponent implements OnInit {
    eventObject:any;
    constructor(private eventService : EventService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        //VVI: '+' will convert the route string parameter to number
        let eventId:number = +this.route.snapshot.params['id'];
        this.eventObject = this.eventService.getEvent(eventId);
    }
}