import { Component } from "@angular/core";

@Component({
    selector:"toggle",
    styleUrls:['app.component.scss'],
    template:`
        <div class="app-ref-toggle">
            <h1>ngIf toggle demo</h1>
            <input
                type = "text"
                [value] = "name"
                (input) = "handleChange($event)">

            <!-- * is the sugar syntax for template and evaluating ngIf property -->
            <div *ngIf="name.length">Searching for {{name}}</div>
            <!-- *
            <template [ngIf]="name.length > 2">
                <div>Searching for {{name}}</div>
            </template>
            -->
        </div>
    `
})

export class Toggle {
    name:string = "doggy";
    handleChange(event:any){
        this.name = event.target.value;
    }
}