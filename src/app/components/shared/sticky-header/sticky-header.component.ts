import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-header',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './sticky-header.component.scss'
})
export class StickyHeaderComponent {

}
