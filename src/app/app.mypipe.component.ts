import { Component } from "@angular/core";
interface Passenger{
    id:number,
    fullname:string,
    checkedIn:boolean,
    checkInDate:number|null
}


@Component({
    selector:"Mypipe",
    styleUrls: ['app.component.scss'],
    template:`
        <div class="app-pipe">
            <h1>Pipe Demo</h1>
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
                {{ i }}:{{passenger.fullname}} <p>{{ passenger | json }}</p>
                <div>{{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : "not checked in" }}</div>
                </li>
                
            </ul>
        </div>
    `
})
export class Mypipe{
    passengers: Passenger[] = [{
        id:1,
        fullname:'Stephen',
        checkedIn: true,
        checkInDate:1490742000000
    },{
        id:2,
        fullname:'Rose',
        checkedIn: false,
        checkInDate:1491606000000
    },{
        id:3,
        fullname:'James',
        checkedIn:true,
        checkInDate:null
    }
    
    ]
}