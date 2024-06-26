import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CurrentHomeService } from '../../../../services/frontend/current-home.service';
import { HomeUtilService } from '../../../../services/utils/home-util.service';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from '../../../common/input/input.component';
import { SelectAreaComponent } from '../../../shared/select-area/select-area.component';
import { ButtonComponent } from '../../../common/button/button.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Home } from '../../../../interfaces/home';
import { FeatureFormMapper } from '../../../../mapper/featureForm.mapper';
import { SelectComponent } from '../../../common/select/select.component';

@Component({
  selector: 'app-home-setting',
  standalone: true,
  templateUrl: './home-setting.component.html',
  styleUrl: './home-setting.component.scss',
  imports: [
    TranslateModule,
    MatIconModule,
    InputComponent,
    SelectAreaComponent,
    ButtonComponent,
    SelectComponent,
  ],
})
export class HomeSettingComponent {
  protected formGroup!: FormGroup;
  private home!: Home;

  constructor(
    formBuilder: FormBuilder,
    protected currentHomeService: CurrentHomeService,
    protected homeUtilService: HomeUtilService
  ) {
    this.setFeatures();
    this.formGroup = formBuilder.group(FeatureFormMapper.settingHomeForm);
    this.formGroup
      .get('title')!
      .setValue(this.currentHomeService.currentHome.name);
  }

  private setFeatures(): void {
    this.homeUtilService.homeFeatures.forEach((feature) => {
      if (this.currentHomeService.currentHome.features.includes(feature.name))
        feature.selected = true;
    });
  }

  protected cancel(): void {
    this.homeUtilService.openSettingHomeDialog = false;
  }

  protected addAdmin(): void {}

  protected save(): void {}
}
