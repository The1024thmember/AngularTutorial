import { outputAst } from "@angular/compiler";
import { Component, Input, Output , EventEmitter} from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector:"passenger-detail",
    styleUrls:["passenger-detail.component.scss"],
    template:`
        <div class="app-nav">
            detail component
            <span class = "status" 
                [class.check-in] = "details.checkedIn"
                ></span>
                <div *ngIf = "editing">
                    <input 
                        type = "text" 
                        [value]="details.fullname"
                        (input)="onNameChange(name.value)"
                        #name
                    >
                </div>
                <div>{{details.fullname}}</div>
                <p>{{ details | json }}</p>
                <div>{{ details.checkInDate ? (details.checkInDate | date: 'yMMMMd' | uppercase) : "not checked in" }}</div>
                <div>
                        children: {{ details.children?.length || 0 }}
                </div>
                <button (click)="toggleCLick()">{{ editing? "Done" : "Edit" }}</button>
                <button (click)="onRemove()">remove</button>
                <p>__________________________________________________</p>
        </div>
    `
})
export class PassengerDetail{
    @Input()
    details: Passenger;

    @Output()
    remove:EventEmitter<any> = new EventEmitter();

    @Output()
    edit:EventEmitter<any> = new EventEmitter();

    editing: boolean = false;
    constructor(){};
    onNameChange(name:string){
        console.log(name);
        this.details.fullname = name;
    }
    toggleCLick(){
        if(this.editing){
            this.edit.emit(this.details);
        }
        this.editing = !this.editing;
    }
    onRemove(){
        this.remove.emit(this.details);
    }
}