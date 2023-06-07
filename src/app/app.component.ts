import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Admin', url: '/folder/inbox', icon: 'mail' },
    { title: 'Clientes', url: '/folder/outbox', icon: 'paper-plane' },
  ];
  constructor() {}
}
