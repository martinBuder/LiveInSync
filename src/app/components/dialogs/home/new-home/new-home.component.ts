import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../../common/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { HomeUtilService } from '../../../../services/utils/home-util.service';

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [TranslateModule, ButtonComponent, MatIcon],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss',
})
export class NewHomeComponent {
  constructor(protected homeUtilService: HomeUtilService) {}

  protected createHome(): void {
    this.homeUtilService.openNewHomeDialog = false;
    this.homeUtilService.openAddHomeDialog = true;
  }

  protected connectHome(): void {
    this.homeUtilService.openNewHomeDialog = false;
    this.homeUtilService.openConnectHomeDialog = true;
  }
}
