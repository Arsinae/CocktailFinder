import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, group, query, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        group([query(':enter', animate('.3s linear', keyframes([
          style({opacity: 0, offset: 0}),
          style({opacity: 1, transform: 'translateX(100%)', offset: 1.0}),
        ])), {optional: true}),
        query(':leave', animate('.3s linear', keyframes([
            style({opacity: 1, offset: 0}),
            style({opacity: 0, offset: 1.0}),
          ])), {optional: true})])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'CocktailFinder';

  routeAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animation'];
  }
}
