import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FeatureFormMapper } from '../../../mapper/featureForm.mapper';
import { TranslateModule } from '@ngx-translate/core';
import { ListComponent } from '../../shared/list/list.component';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-cleaning',
  standalone: true,
  imports: [
    ListComponent,
    TranslateModule,
    ReactiveFormsModule,
    FeatureFormMapper,
  ],
  templateUrl: './cleaning.component.html',
  styleUrl: './cleaning.component.scss',
})
export class CleaningComponent {
  protected formGroup!: FormGroup;
  protected shopCategories: Array<Category> = [
    { name: 'alle', color: 'white' },
  ];

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(FeatureFormMapper.cleaningForm);
  }
}
