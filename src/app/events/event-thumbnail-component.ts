import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component ({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail-component.html',
    styles: [`
    .thumbnail {min-height: 210px;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
    `]
})
export class EventThumbnailComponent{
    @Input() eventInput: any;
    @Output() eventClick = new EventEmitter();
    someProperty:string = "Test Value";
    handleClick() {
        this.eventClick.emit(this.eventInput.name)
    }

    logRefVar(data) {
        console.log("Printing using reference variable from parent: " + data);
    }
}