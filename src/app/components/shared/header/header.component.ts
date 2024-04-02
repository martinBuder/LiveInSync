import { Component } from '@angular/core';
import { LogoImgComponent } from '../../common/logo/logo.component';
import { SettingMenuComponent } from '../setting-menu/setting-menu.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../common/button/button.component';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';

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
    TranslateModule,
  ],
})
export class HeaderComponent {
  protected showStartMenu: boolean = false;
  protected menuOpen: boolean = false;
  private startPaths: string[] = [
    '/',
    '/register',
    '/forgotPassword',
    '/newPassword',
  ];

  constructor(private router: Router, protected utilService: UtilService) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        console.log(x.url);
        this.checkWhichHeader(x.url);
      }
    });
  }

  checkWhichHeader(url: string): void {
    if (this.startPaths.includes(url)) this.showStartMenu = true;
    else this.showStartMenu = false;
  }

  public closeMenu(): void {
    this.menuOpen = false;
  }
}
