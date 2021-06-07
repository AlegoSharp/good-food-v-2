import { Component } from '@angular/core';

import { trigger } from '@angular/animations';

import { Plugins } from '@capacitor/core';
import { SwUpdate } from '@angular/service-worker';

export const routeTransitionAnimations = trigger('triggerName', []);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [routeTransitionAnimations]
})

export class AppComponent {

  constructor(private swUpdate: SwUpdate) {
    this.initializeApp();
  }

  initializeApp(): void {
    if (this.swUpdate.available) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('A new version is available. Load it?')) {
          window.location.reload();
        }
      });
    }
  }
}
