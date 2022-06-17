import { Component } from "@angular/core";
interface Passenger{
    id:number,
    fullname:string,
    checkedIn:boolean
}


@Component({
    selector:"looping",
    styleUrls: ['app.component.scss'],
    template:`
        <div class="app-looping">
            <h1>Looping Demo</h1>
            <h3>Airline Passengers</h3> 

            <!-- ngFor original using template can be shortened as *noFor
            <ul>
                <ng-template ngFor let-passenger let-i = "index" [ngForOf] = "passengers">
                <li *ngFor="let passenger of passengers; let i=index">{{ i }}:{{passenger.fullname}}</li>
                </ng-template>
            </ul>
            -->

            <ul>
                
                <li *ngFor="let passenger of passengers; let i=index">
                <span class = "status" 
                [class.check-in] = "passenger.checkedIn"
                ></span>
                {{ i }}:{{passenger.fullname}}</li>
            </ul>

            <ul>
                
            <li *ngFor="let passenger of passengers; let i=index">
            <span class = "status" 
            [ngClass]="{
                'check-in':passenger.checkedIn,
                'check-out':!passenger.checkedIn
            }"
            ></span>
            {{ i }}:{{passenger.fullname}}</li>
            </ul>

            <ul>
                
            <li *ngFor="let passenger of passengers; let i=index">
            <span class = "status" 
            [style.backgroundColor]="(passenger.checkedIn ? 'green' : 'red')"
            ></span>
            {{ i }}:{{passenger.fullname}}</li>
            </ul>

            <ul>
                
            <li *ngFor="let passenger of passengers; let i=index">
            <span 
            class = "status" 
            [ngStyle]="{
                backgroundColor: (passenger.checkedIn ? 'green' : 'red')
            }"
            ></span>
            {{ i }}:{{passenger.fullname}}</li>
            </ul>
        </div>
    `
})
export class Looping{
    passengers: Passenger[] = [{
        id:1,
        fullname:'Stephen',
        checkedIn: true
    },{
        id:2,
        fullname:'Rose',
        checkedIn: false
    },{
        id:3,
        fullname:'James',
        checkedIn:true
    }
    
    ]
}