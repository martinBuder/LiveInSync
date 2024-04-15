import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TodoDiagramComponent } from '../../diagrams/todo-diagram/todo-diagram.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [TranslateModule, TodoDiagramComponent],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  finishedAmount: number = 7;
  unfinishedAmount: number = 4;
  delayAmount: number = 2;
}
