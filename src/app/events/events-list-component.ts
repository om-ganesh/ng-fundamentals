import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list-component.html'
})
export class EventsListComponent {
    event = {
        id : 1,
        name: 'Angular Connect',
        date: '9/9/2019',
        time: '10:00AM',
        price: '499',
        imageUrl: '/assets/images/angularconnect.jpg',
        location: {
            address:'111 Danforth Ave',
            city: 'Toronto',
            country: 'Canada'
        } 
    }

}