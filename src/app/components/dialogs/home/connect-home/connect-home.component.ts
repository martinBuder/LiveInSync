import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LOAD_WASM, NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

// LOAD_WASM().subscribe();

@Component({
  selector: 'app-connect-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgxScannerQrcodeModule],
  templateUrl: './connect-home.component.html',
  styleUrl: './connect-home.component.scss',
})
export class ConnectHomeComponent {}
