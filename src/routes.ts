import {Routes} from '@angular/router'
import {Error404Component} from './app/errors/Error404.component';

import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { EventRouteActivatorService } from './app/events/event-details/event-route-activator.service';
import { EventsListResolverService } from './app/events/events-list-resolver.service';
// TODO: The barrels is not working
// import {
//     EventsListComponent
//     ,EventDetailsComponent
//     ,CreateEventComponent
//     ,EventRouteActivatorService
//     ,EventsListResolverService 
//   } from './app/events/index';

export const appRoutes: Routes = [
    //Step2: routes takes that and puts in route
    {path: 'events', component: EventsListComponent, resolve:
        {eventsObserved: EventsListResolverService}},
    //to user activator/deactivator, we can use simply function or a service
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]}, // matches /events/1 or /events/foo
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch:'full'},    //default route 
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]