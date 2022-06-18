import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from "@angular/core";

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template:`
    <div class="app-root">
        <h1>App Root</h1>
        <passenger-dashboards></passenger-dashboards>
    </div>
  `
})
export class AppComponent {
}