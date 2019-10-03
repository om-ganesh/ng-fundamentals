import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from 'src/routes';
import { AppComponent } from './app.component';
import { NavBarComponent} from './navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/Error404.component';

import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import {EventRouteActivatorService} from './events/event-details/event-route-activator.service';
import { EventsListResolverService } from './events/events-list-resolver.service';
import {SessionListComponent} from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';


//TODO: The barrels for common imports not working
// import {
  // EventService
  // ,EventsListComponent
  // ,EventThumbnailComponent
  // ,EventDetailsComponent
  // ,CreateEventComponent
  // ,EventRouteActivatorService
  // ,EventsListResolverService 
// } from './events/index';
@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivatorService,
    EventsListResolverService,
    { //This is short hand approach of defining service (for simpler scenarios)
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty) {
    return window.confirm('You have not saved. Do you want to cancel anyway?');
  }
  return true;
}