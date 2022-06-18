import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { TwoWayBindingcomponent } from "./app.twowaybinding.component";
import { RefDemo } from "./app.ref.component";
import { FormsModule } from "@angular/forms";
import { Toggle } from "./app.toggle.component";
import { Looping } from "./app-looping-component";
import { Mypipe } from "./app.mypipe.component";
import { Mynav } from "./app.navigation.component";
import { PassengerDashboardsMoudle } from "./passenger-dashboard/passenger.dashboards.module"
import { AppComponent } from "./app.component";
@NgModule({
  declarations: [
    TwoWayBindingcomponent,
    RefDemo,
    Toggle,
    Looping,
    Mypipe,
    Mynav,
    AppComponent
  ],
  imports: [
    //Angular module
    BrowserModule,
    CommonModule,
    FormsModule,

    //customer module
    PassengerDashboardsMoudle
  ],
  bootstrap: [AppComponent,RefDemo,Toggle,Looping,Mypipe,Mynav,AppComponent]
})
export class AppModule {}