import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DarkmodeService } from '../../../services/global/darkmode.service';
import { UtilService } from '../../../services/utils/util.service';
import { ClickOutsideDirective } from '../../../directives/click-outside-directive';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-setting-menu',
  standalone: true,
  imports: [
    TranslateModule,
    MatSlideToggleModule,
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
    protected utilService: UtilService
  ) {}

  protected isDarkmode(): boolean {
    const theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') return true;
    else return false;
  }

  public closeWindow = () => {
    this.closing.emit();
  };
}
