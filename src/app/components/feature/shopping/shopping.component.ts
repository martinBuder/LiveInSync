import { Component } from '@angular/core';
import { ListComponent } from '../../shared/list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFormMapper } from '../../../mapper/featureForm.mapper';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(FeatureFormMapper.shoppingForm);
  }
}
