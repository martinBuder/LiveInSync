import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CurrentHomeService } from '../../../../services/frontend/current-home.service';
import { QrCodeModule } from 'ng-qrcode';
import { MatIconModule } from '@angular/material/icon';
import { HomeUtilService } from '../../../../services/utils/home-util.service';

@Component({
  selector: 'app-share-home',
  standalone: true,
  imports: [TranslateModule, QrCodeModule, MatIconModule],
  templateUrl: './share-home.component.html',
  styleUrl: './share-home.component.scss',
})
export class ShareHomeComponent {
  constructor(
    protected currentHomeService: CurrentHomeService,
    protected homeUtilService: HomeUtilService
  ) {}
}
