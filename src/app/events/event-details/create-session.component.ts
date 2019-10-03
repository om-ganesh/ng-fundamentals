import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'create-session',
    templateUrl:'./create-session.component.html'
})
export class CreateSessionComponent {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    saveSession(fromValues) {
        //logic to read from form and save it
        const formData ={
            name: "Using Angular 4 Pipes",
            presenter: "Peter Bacon Darwin",
            duration: 1,
            level: "Intermediate",
            abstract: `Learn all about the new pipes in Angular 4, both 
            how to write them, and how to get the new AI CLI to write 
            them for you. Given by the famous PBD, president of Angular 
            University (formerly Oxford University)`,
            voters: ['bradgreen', 'igorminar', 'martinfowler']
          };
        this.saveNewSession.emit(formData);
    }

    cancelSession() {
        this.cancelAddSession.emit();
    }
}
