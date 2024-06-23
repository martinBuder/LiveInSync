import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CurrentHomeService } from '../../../../services/frontend/current-home.service';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-share-home',
  standalone: true,
  imports: [TranslateModule, QrCodeModule],
  templateUrl: './share-home.component.html',
  styleUrl: './share-home.component.scss',
})
export class ShareHomeComponent {
  constructor(protected currentHomeService: CurrentHomeService) {}
}
