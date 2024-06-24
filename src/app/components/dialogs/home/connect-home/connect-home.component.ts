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
import { UserProfileService } from '../../../../services/global/backend/userProfile.service';
import { FirebaseService } from '../../../../services/global/backend/firebase.service';

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
    private userProfileService: UserProfileService,
    private firebaseService: FirebaseService,
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

  protected async connectingHome(): Promise<void> {
    const homeId = this.formGroup.value.title;
    const user = this.userProfileService.user;
    user?.homes?.push(homeId);
    if (user !== null)
      await this.firebaseService.updateFireItem(
        'AppUsers',
        user.id as string,
        user
      );
    this.homeUtilService.openConnectHomeDialog = false;
    // es fehlt noch die bestätigung
  }
}
