import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector:"passenger-count",
    template:`
        <div class="app-nav">
            count component
            <div>Total checkedIn : {{ checkedInCount() }}/{{ items.length }}</div>
        </div>
    `
})
export class PassengerCount{
    @Input()
    items: Passenger[];
    constructor(){};
    checkedInCount():number|null{

        if(!this.items){
            return null;
        }else{
            return this.items.filter((passenger: Passenger)=>passenger.checkedIn).length;
        }
    }
}