import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template:`
    <div class="app-two-way-binding">
      <h1 [innerHTML] = "title"></h1>
      <div>{{ numberOne + numberTwo }}</div>
      <div> {{ ishappy? ':)' : ':(' }} </div>
      <div [style] = "mystyle">Mytest</div>
      <input 
        type="text" 
        [ngModel]="name"
        (blur) = "handleBlur($event)"
        (ngModelChange) = "handleChange($event)"
      >
      <!-- NgModal two way binding -->
      <input 
      type="text" 
      [(ngModel)]="name"
      >
      <h2>{{name}}</h2>
    </div>
  `
})
export class AppComponent {
  title:string;
  ishappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  name: string = "sophia";
  mystyle:string = 'height:80px; width:80px; background-color:purple';
  constructor() {
    this.title = 'Two-way binding Demo';
  }

  handleInput(event:any){
    this.name = event.target.value;
  }

  handleBlur(event: any){
    this.name = event.target.value;
    console.log(event);
  }

  handleChange(value:any){
    this.name = value;
    console.log("change detected");
  }
}