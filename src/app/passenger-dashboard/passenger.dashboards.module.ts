import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//dashboard
import { PassengerDashboardsComponent } from "./container/passenger-dashboard/passenger-dashboards-component";
//components
import { PassengerCount } from "./component/passenger-count/passenger.count.component";
import { PassengerDetail } from "./component/passenger-detail/passenger.detail.component";

@NgModule({
    declarations: [PassengerDashboardsComponent,PassengerCount,PassengerDetail],
    imports:[
        BrowserModule,
        CommonModule
    ],
    bootstrap:[PassengerDashboardsComponent],
    exports:[PassengerDashboardsComponent]
})
export class PassengerDashboardsMoudle{}