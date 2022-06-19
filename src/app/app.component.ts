import { Component, ɵflushModuleScopingQueueAsMuchAsPossible } from "@angular/core";

interface Nav{
  link:string,
  name:string,
  exact:boolean,
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template:`
    <div class="app-root">
        <h1>App Root</h1>
        <nav class = "nav">
          <a *ngFor = "let item of nav"
            [routerLink]="item.link"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact:item.exact }"
          >{{ item.name }}</a>
        </nav>
        <router-outlet></router-outlet>
        
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [{
    link: '/',
    name: 'home',
    exact: true
  },{
    link: '/oops',
    name: '404',
    exact: false
  },{
    link: '/passengers',
    name: 'passengers',
    exact: true
  },
  {
    link: '/TwoWayBindingcomponent',
    name: 'TwoWayBindingcomponent',
    exact: true
  },
  {
    link: '/RefDemo',
    name: 'RefDemo',
    exact: true
  },
  {
    link: '/Toggle',
    name: 'Toggle',
    exact: true
  },
  {
    link: '/Looping',
    name: 'Looping',
    exact: true
  },
  {
    link: 'Mypipe',
    name: 'Mypipe',
    exact: true
  },
  {
    link: '/Mynav',
    name: 'Mynav',
    exact: true
  },

];
}