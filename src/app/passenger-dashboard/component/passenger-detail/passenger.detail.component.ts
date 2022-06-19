import { outputAst } from "@angular/compiler";
import { Component, Input, Output , EventEmitter, OnChanges, SimpleChanges, OnInit} from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Passenger } from "../../models/passenger.interface";

@Component({
    selector:"passenger-detail",
    styleUrls:["passenger-detail.component.scss"],
    template:`
        <div class="app-nav">
            detail component
            <span class = "status" 
                [class.check-in] = "mydetail.checkedIn"
                ></span>
                <div *ngIf = "editing">
                    <input 
                        type = "text" 
                        [value]="mydetail.fullname"
                        (input)="onNameChange(name.value)"
                        #name
                    >
                </div>
                <div>{{mydetail.fullname}}</div>
                <p>{{ mydetail | json }}</p>
                <div>{{ mydetail.checkInDate ? (mydetail.checkInDate | date: 'yMMMMd' | uppercase) : "not checked in" }}</div>
                <div>
                        children: {{ mydetail.children?.length || 0 }}
                </div>
                <button (click)="toggleCLick()">{{ editing? "Done" : "Edit" }}</button>
                <button (click)="onRemove()">remove</button>
                <p>__________________________________________________</p>
        </div>
    `
})
export class PassengerDetail implements OnChanges, OnInit{
    @Input()
    mydetail: Passenger;

    @Output()
    remove:EventEmitter<any> = new EventEmitter();

    @Output()
    edit:EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){};

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if(changes["mydetail"]){
           /* this.mydetail = Object.assign({},{            
                id:2,
                fullname:'Rose',
                checkedIn: false,
                checkInDate:1491606000000,
                children:null});
            */
           this.mydetail = Object.assign({},changes["mydetail"].currentValue);
        }
        console.log("ngOnChanges");
    }

    ngOnInit(): void {
        console.log("oninit");
    }
    onNameChange(name:string){ //everytime when we change the value of a local componenet, we are changing the initial reference to the object
        console.log(name);
        this.mydetail.fullname = name;
    }
    toggleCLick(){
        if(this.editing){
            this.edit.emit(this.mydetail);
        }
        this.editing = !this.editing;
    }
    onRemove(){
        this.remove.emit(this.mydetail);
    }
}