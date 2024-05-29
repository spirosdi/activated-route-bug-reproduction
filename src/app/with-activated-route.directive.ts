import { Directive, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appWithActivatedRoute]',
  standalone: true,
})
export class WithActivatedRouteDirective {
  private activatedRoute = inject(ActivatedRoute);

  @HostListener('click', ['$event']) click() {
    console.log(this.activatedRoute.snapshot.params);
  }
}
