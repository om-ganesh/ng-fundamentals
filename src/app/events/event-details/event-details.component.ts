import {Component, OnInit} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
import { IEvent, ISession} from '../shared/event.model'

@Component( {
    templateUrl: './event-details.component.html',
    styles:[`
        .container: {padding-left:20px; padding-right:20px;}
        .event-image {height:100px}
        a {cursor:pointer}
    `]
})
export class EventDetailsComponent implements OnInit {
    eventObject:IEvent;
    addMode:boolean;
    constructor(private eventService : EventService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        //VVI: '+' will convert the route string parameter to number
        let eventId:number = +this.route.snapshot.params['id'];
        this.eventObject = this.eventService.getEvent(eventId);
    }

    addSession() {
        this.addMode=true;
    }

    saveSessionFromChild(data:ISession) {
        console.log(data);
        const nextId = Math.max.apply(null, this.eventObject.sessions.map(s=> s.id));

        data.id = nextId +1;
        this.eventObject.sessions.push(data);
        this.eventService.updateEvent(this.eventService);
        this.addMode = false;
    }

    cancelAddSessionFromChild() {
        this.addMode = false;
    }
}