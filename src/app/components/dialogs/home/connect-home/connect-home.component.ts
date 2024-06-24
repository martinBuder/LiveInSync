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
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FeatureFormMapper } from '../../../../mapper/featureForm.mapper';
import { MatIconModule } from '@angular/material/icon';
import { HomeUtilService } from '../../../../services/utils/home-util.service';
import { ButtonComponent } from '../../../common/button/button.component';

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
    ButtonComponent,
    ReactiveFormsModule,
    FeatureFormMapper,
    MatIconModule,
  ],
  templateUrl: './connect-home.component.html',
  styleUrl: './connect-home.component.scss',
})
export class ConnectHomeComponent {
  protected formGroup!: FormGroup;
  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  protected qrValue: string = '';

  public config: ScannerQRCodeConfig = {
    constraints: {
      video: {
        width: window.innerWidth,
      },
    },
  };

  constructor(
    private qrcode: NgxScannerQrcodeService,
    protected homeUtilService: HomeUtilService,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(FeatureFormMapper.connectHomeForm);
  }

  public onSelects(files: any) {
    this.qrcode
      .loadFiles(files)
      .subscribe((res: ScannerQRCodeSelectedFiles[]) => {
        this.qrCodeResult = res;
      });
  }

  protected connectingHome(): void {
    const homeId = this.formGroup.value.title;
    console.log(homeId);
  }
}
