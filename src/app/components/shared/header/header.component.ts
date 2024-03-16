import { Component } from '@angular/core';
import { LogoImgComponent } from '../../common/logo/logo.component';
import { SettingMenuComponent } from '../setting-menu/setting-menu.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    LogoImgComponent,
    SettingMenuComponent,
    ButtonComponent,
    CommonModule,
  ],
})
export class HeaderComponent {
  public menuOpen: boolean = false;

  constructor() {}

  public closeMenu(): void {
    this.menuOpen = false;
  }
}
