import { Component } from '@angular/core';
import { ListComponent } from '../../shared/list/list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodoMapper } from '../../../mapper/todo.mapper';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-todo-view',
  standalone: true,
  imports: [
    ListComponent,
    ButtonComponent,
    TranslateModule,
    ReactiveFormsModule,
    TodoMapper,
  ],
  templateUrl: './todo-view.component.html',
  styleUrl: './todo-view.component.scss',
})
export class TodoViewComponent {
  protected formGroup!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group(TodoMapper.form);
  }
}
