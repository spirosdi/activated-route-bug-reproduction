import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './parent.component.html',
})
export class ParentComponent {

}
