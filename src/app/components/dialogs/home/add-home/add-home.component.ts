import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../../../common/input/input.component';
import { ButtonComponent } from '../../../common/button/button.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeatureFormMapper } from '../../../../mapper/featureForm.mapper';
import { SelectAreaComponent } from '../../../shared/select-area/select-area.component';
import { HomeUtilService } from '../../../../services/utils/home-util.service';
import { FeaturesEnum, Home } from '../../../../interfaces/home';
import { UserProfileService } from '../../../../services/global/backend/userProfile.service';
import { UtilService } from '../../../../services/utils/util.service';
import { FirebaseService } from '../../../../services/global/backend/firebase.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-home',
  standalone: true,
  imports: [
    TranslateModule,
    InputComponent,
    ButtonComponent,
    SelectAreaComponent,
    MatIconModule,
  ],
  templateUrl: './add-home.component.html',
  styleUrl: './add-home.component.scss',
})
export class AddHomeComponent {
  protected formGroup!: FormGroup;
  private home!: Home;

  constructor(
    formBuilder: FormBuilder,
    protected homeUtilService: HomeUtilService,
    private userProfilService: UserProfileService,
    private firebaseService: FirebaseService,
    private utilService: UtilService
  ) {
    this.formGroup = formBuilder.group(FeatureFormMapper.addHomeForm);
  }

  protected cancel(): void {
    this.homeUtilService.openAddHomeDialog = false;
  }

  protected async save(): Promise<void> {
    await this.saveHome();
    this.connectHomeWithUser();
  }

  private async saveHome(): Promise<void> {
    this.home = {
      name: this.formGroup.value.title,
      id:
        this.formGroup.value.title +
        '~' +
        this.utilService.generateSimpleToken(8),
      adminUsersId: [this.userProfilService.user?.id as string],
      features: this.homeUtilService.returnHomeFeatures(),
      connectedUsers: [
        {
          name: this.userProfilService.user?.name as string,
          id: this.userProfilService.user?.id as string,
        },
      ],
    };
    await this.firebaseService.setItemToFirebase(
      'allHomes',
      this.home.id,
      this.home
    );
    this.homeUtilService.openAddHomeDialog = false;
  }

  private connectHomeWithUser(): void {
    this.userProfilService.user?.homes?.push(this.home.id);
    if (this.userProfilService.user?.mainHome === '')
      this.userProfilService.user.mainHome = this.home.id;
    this.firebaseService.updateFireItem(
      'AppUsers',
      this.userProfilService.user?.id as string,
      this.userProfilService.user
    );
  }
}
