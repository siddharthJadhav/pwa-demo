import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-demo';

  update: boolean;

  constructor(public updates: SwUpdate) {

    updates.available.subscribe( () => {
      this.update = true;
    });
  }
}
