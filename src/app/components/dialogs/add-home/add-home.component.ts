import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '../../common/input/input.component';
import { ButtonComponent } from '../../common/button/button.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FeatureFormMapper } from '../../../mapper/featureForm.mapper';
import { SelectAreaComponent } from '../../shared/select-area/select-area.component';
import { NewHomeUtilService } from '../../../services/utils/new-home-util.service';

@Component({
  selector: 'app-add-home',
  standalone: true,
  imports: [
    TranslateModule,
    InputComponent,
    ButtonComponent,
    SelectAreaComponent,
  ],
  templateUrl: './add-home.component.html',
  styleUrl: './add-home.component.scss',
})
export class AddHomeComponent {
  protected formGroup!: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    protected newHomeUtilService: NewHomeUtilService
  ) {
    this.formGroup = formBuilder.group(FeatureFormMapper.addHomeForm);
  }

  cancel(): void {}

  save(): void {}
}
