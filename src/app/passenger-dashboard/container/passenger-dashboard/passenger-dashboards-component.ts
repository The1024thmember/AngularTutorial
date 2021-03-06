import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
    selector:"passenger-dashboards",
    styleUrls: ['passenger.dashboard.component.scss'],
    template:`
        <div class="app-nav">
            <h2>Passenger DashBoard Demo</h2>
            <h3>Airline Passengers</h3> 
            <h4>All passengers</h4>
            <div *ngFor="let passenger of passengers">
                {{ passenger.fullname }}
            </div>
            <passenger-count
                [items] = "passengers"
            ></passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [mydetail] = "passenger"
                (edit) = "handleEdit($event)"
                (remove) = "handleRemove($event)"
            ></passenger-detail>
        </div>
    `
})
export class PassengerDashboardsComponent implements OnInit{
    passengers: Passenger[];
    constructor(){};
    ngOnInit(): void { //binds the component with the data when the dom is ready
        console.log("oninit ng");
        this.passengers = [{
            id:1,
            fullname:'Stephen',
            checkedIn: true,
            checkInDate:1490742000000,
            children: [{
                name:'a',
                age:1
            },
            {
                name:'b',
                age:2
            }]
        },{
            id:2,
            fullname:'Rose',
            checkedIn: false,
            checkInDate:1491606000000,
            children:null
        },{
            id:3,
            fullname:'James',
            checkedIn:true,
            checkInDate:null,
            children:null
        }
        
        ]
    }

    handleRemove(event:Passenger){
        this.passengers = this.passengers.filter((passenger:Passenger)=> passenger.id !== event.id)
        console.log(event);
    }

    handleEdit(event:Passenger){
        this.passengers = this.passengers.map((passenger: Passenger)=>{
            if (passenger.id === event.id){
                passenger = Object.assign({}, passenger, event);
            }
            return passenger;
        })
        console.log(this.passengers);
    }
}