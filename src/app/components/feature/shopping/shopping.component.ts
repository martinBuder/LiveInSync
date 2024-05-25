import { Component } from '@angular/core';
import { ListComponent } from '../../shared/list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFormMapper } from '../../../mapper/featureForm.mapper';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [
    ListComponent,
    TranslateModule,
    ReactiveFormsModule,
    FeatureFormMapper,
  ],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
})
export class ShoppingComponent {
  protected formGroup!: FormGroup;
  protected shopCategories: Array<Category> = [
    { name: 'alle', color: 'white' },
    { name: 'Edeka', color: 'yellow' },
    { name: 'OBI', color: 'orange' },
  ];

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(FeatureFormMapper.shoppingForm);
  }
}
