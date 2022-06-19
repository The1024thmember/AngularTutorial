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
import { PassengerDashboardsMoudle } from "./passenger-dashboard/passenger.dashboards.module";
import { HomeComponent } from "./home.component"; 
import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./notfound.component";

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: 'TwoWayBindingcomponent', component: TwoWayBindingcomponent, pathMatch:"full" },
  { path: 'RefDemo', component: RefDemo, pathMatch:"full" },
  { path: 'Toggle', component: Toggle, pathMatch:"full" },
  { path: 'Looping', component: Looping, pathMatch:"full" },
  { path: 'Mypipe', component: Mypipe, pathMatch:"full" },
  { path: 'Mynav', component: Mynav, pathMatch:"full" },
  { path: '**', component: NotFoundComponent, pathMatch:"full" },
];

@NgModule({
  declarations: [
    TwoWayBindingcomponent,
    HomeComponent,
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
    RouterModule.forRoot(routes),

    //customer module
    PassengerDashboardsMoudle
  ],
  bootstrap: [AppComponent,RefDemo,Toggle,Looping,Mypipe,Mynav,AppComponent]
})
export class AppModule {}