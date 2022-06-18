import { Component } from "@angular/core";

@Component({
    selector:"ref",
    styleUrls: ['app.component.scss'],
    template:`
        <div class="app-ref">
            <h1>Ref Demo</h1>
            <button (click)="handleClick(username.value)">Get Value</button>
            <input type="text" #username>
            <div>{{ name }}</div>
        </div>
    `
})
export class RefDemo{
    name:string = "";
    handleClick(value:string){
        this.name = value;
    }
}