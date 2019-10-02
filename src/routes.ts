import {Routes} from '@angular/router'
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import {Error404Component} from './app/errors/Error404.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
    {path: 'events', component: EventsListComponent},
    //to user activator/deactivator, we can use simply function or a service
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}, // matches /events/1 or /events/foo
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch:'full'},    //default route 
]