import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DarkmodeService } from '../../../services/global/darkmode.service';
import { UtilService } from '../../../services/utils/util.service';
import { ClickOutsideDirective } from '../../../directives/click-outside-directive';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../../common/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../../services/global/backend/auth.service';
import { HomeUtilService } from '../../../services/utils/home-util.service';

@Component({
  selector: 'app-setting-menu',
  standalone: true,
  imports: [
    TranslateModule,
    MatSlideToggleModule,
    MatIcon,
    ClickOutsideDirective,
    HeaderComponent,
    ButtonComponent,
  ],
  templateUrl: './setting-menu.component.html',
  styleUrl: './setting-menu.component.scss',
})
export class SettingMenuComponent {
  @Output() closing = new EventEmitter<void>();

  constructor(
    protected darkmodeService: DarkmodeService,
    protected utilService: UtilService,
    protected homeService: HomeUtilService,
    protected authService: AuthService
  ) {}

  protected isDarkmode(): boolean {
    const theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') return true;
    else return false;
  }

  public closeWindow = () => {
    this.closing.emit();
  };

  protected logOut(): void {
    this.authService.fireLogOut();
  }

  protected openDialog(dialog: string): void {
    this.utilService.closeThis(this.closeWindow, 'settingMenuClose');
    switch (dialog) {
      case 'add':
        this.homeService.openAddHomeDialog = true;
        break;
      case 'share':
        this.homeService.openShareHomeDialog = true;
        break;
      case 'setting':
        this.homeService.openSettingHomeDialog = true;
        break;
      default:
        console.error(`${dialog} isn´t a boolean in HomeUtilService.`);
    }
  }
}
