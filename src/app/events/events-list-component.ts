import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Coming events page...</h1>
        <hr>
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span>Location: {{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    </div>
    `
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