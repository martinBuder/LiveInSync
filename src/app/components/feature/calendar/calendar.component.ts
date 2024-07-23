import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ListComponent } from '../../shared/list/list.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FeatureFormMapper } from '../../../mapper/featureForm.mapper';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    ListComponent,
    TranslateModule,
    ReactiveFormsModule,
    FeatureFormMapper,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  protected formGroup!: FormGroup;
  protected calendarCategories: Array<Category> = [
    { name: 'all', color: 'white' },
  ];

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(FeatureFormMapper.calendarForm);
  }
}
