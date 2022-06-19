import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
//dashboard
import { PassengerDashboardsComponent } from "./container/passenger-dashboard/passenger-dashboards-component";
//components
import { PassengerCount } from "./component/passenger-count/passenger.count.component";
import { PassengerDetail } from "./component/passenger-detail/passenger.detail.component";

const routes: Routes = [
    {
        path: 'passengers',
        component: PassengerDashboardsComponent
    }
]

@NgModule({
    declarations: [PassengerDashboardsComponent,PassengerCount,PassengerDetail],
    imports:[
        BrowserModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    bootstrap:[PassengerDashboardsComponent]
})
export class PassengerDashboardsMoudle{}