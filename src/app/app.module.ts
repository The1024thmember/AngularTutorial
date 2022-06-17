import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.twowaybinding.component";
import { RefDemo } from "./app.ref.component";
import { FormsModule } from "@angular/forms";
import { Toggle } from "./app.toggle.component";
import { Looping } from "./app-looping-component";
import { Mypipe } from "./app.mypipe.component";
import { Mynav } from "./app.navigation.component";

@NgModule({
  declarations: [
    AppComponent,
    RefDemo,
    Toggle,
    Looping,
    Mypipe,
    Mynav
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent,RefDemo,Toggle,Looping,Mypipe,Mynav]
})
export class AppModule {}