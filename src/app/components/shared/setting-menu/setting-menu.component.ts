import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DarkmodeService } from '../../../services/global/darkmode.service';

@Component({
  selector: 'app-setting-menu',
  standalone: true,
  imports: [TranslateModule, MatSlideToggleModule],
  templateUrl: './setting-menu.component.html',
  styleUrl: './setting-menu.component.scss'
})
export class SettingMenuComponent {

  constructor(protected darkmodeService: DarkmodeService) {
  }

  protected isDarkmode(): boolean {
    const theme = document.body.getAttribute('data-theme');
    if(theme === 'dark') return true;
    else return false;
  }


 }
