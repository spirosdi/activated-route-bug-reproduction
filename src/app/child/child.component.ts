import { Component } from '@angular/core';
import { WithActivatedRouteDirective } from '../with-activated-route.directive';
import { RouterLink } from '@angular/router';
import { WithMatProgressSpinnerComponent } from '../with-mat-progress-spinner/with-mat-progress-spinner.component';

@Component({
  selector: 'app-client-orders-container',
  standalone: true,
  imports: [
    WithActivatedRouteDirective,
    RouterLink,
    WithMatProgressSpinnerComponent,
  ],
  templateUrl: './child.component.html',
})
export class ChildComponent {}
