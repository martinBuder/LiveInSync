import { Component } from '@angular/core';
import { LogoImgComponent } from '../../common/logo/logo.component';
import { SettingMenuComponent } from '../setting-menu/setting-menu.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../common/button/button.component';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { PathService } from '../../../services/global/path.service';

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
  protected menuOpen: boolean = false;

  constructor(
    protected utilService: UtilService,
    protected pathService: PathService
  ) {}

  public closeMenu(): void {
    this.menuOpen = false;
  }
}
