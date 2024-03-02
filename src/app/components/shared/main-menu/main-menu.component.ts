import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class HeaderMenuComponent {

  constructor() {
  }
}
