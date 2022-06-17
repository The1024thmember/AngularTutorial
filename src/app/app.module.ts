import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.twowaybinding.component";
import { RefDemo } from "./app.ref.component";
import { FormsModule } from "@angular/forms";
import { Toggle } from "./app.toggle.component";
import { Looping } from "./app-looping-component";

@NgModule({
  declarations: [
    AppComponent,
    RefDemo,
    Toggle,
    Looping
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent,RefDemo,Toggle,Looping]
})
export class AppModule {}