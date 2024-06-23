import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {
  LOAD_WASM,
  NgxScannerQrcodeModule,
  NgxScannerQrcodeService,
  ScannerQRCodeConfig,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';
import { InputComponent } from '../../../common/input/input.component';

if (typeof document !== 'undefined') {
  LOAD_WASM().subscribe();
}

@Component({
  selector: 'app-connect-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NgxScannerQrcodeModule,
    InputComponent,
  ],
  templateUrl: './connect-home.component.html',
  styleUrl: './connect-home.component.scss',
})
export class ConnectHomeComponent {
  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  };

  constructor(private qrcode: NgxScannerQrcodeService) {}

  public onSelects(files: any) {
    this.qrcode
      .loadFiles(files)
      .subscribe((res: ScannerQRCodeSelectedFiles[]) => {
        this.qrCodeResult = res;
      });
  }
}
