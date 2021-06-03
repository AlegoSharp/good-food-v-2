import { Component } from '@angular/core';

import { trigger } from '@angular/animations';

import { Plugins } from '@capacitor/core';

export const routeTransitionAnimations = trigger('triggerName', []);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [routeTransitionAnimations]
})

export class AppComponent {

  constructor() { }
}
