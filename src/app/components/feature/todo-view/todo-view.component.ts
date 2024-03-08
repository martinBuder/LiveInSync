import { Component } from '@angular/core';
import { ListComponent } from '../../shared/list/list.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-view',
  standalone: true,
  imports: [ListComponent, ButtonComponent, TranslateModule],
  templateUrl: './todo-view.component.html',
  styleUrl: './todo-view.component.scss'
})
export class TodoViewComponent {

  protected openAdd() {
    
  }

}