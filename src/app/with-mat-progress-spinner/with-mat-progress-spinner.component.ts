import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-with-mat-progress-spinner',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './with-mat-progress-spinner.component.html',
})
export class WithMatProgressSpinnerComponent {

}
