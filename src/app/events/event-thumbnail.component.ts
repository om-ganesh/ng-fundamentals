import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
    .thumbnail {min-height: 210px;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
    .green { color: #003300 !important}
    .bold { font-weight: bold}
    `]
})
export class EventThumbnailComponent{
    @Input() eventInput: any;
    @Output() eventClick = new EventEmitter();
    handleClick() {
        this.eventClick.emit(this.eventInput)
    }

    getEventTimeClass() {
        if( this.eventInput && this.eventInput.time === '8:00 am') {
            return ['green', 'bold'];
        }
        return [];
    }
    logRefVar(data) {
        console.log("Printing using reference variable from parent: " + data);
    }
}