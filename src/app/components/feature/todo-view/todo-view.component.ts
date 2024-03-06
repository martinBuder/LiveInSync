import { Component } from '@angular/core';
import { ListComponent } from '../../shared/list/list.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-todo-view',
  standalone: true,
  imports: [ListComponent, ButtonComponent],
  templateUrl: './todo-view.component.html',
  styleUrl: './todo-view.component.scss'
})
export class TodoViewComponent {

  protected openAdd() {
    
  }

}
