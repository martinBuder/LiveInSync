import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CircleChartComponent } from '../../diagrams/circle-diagram/circle-diagram.component';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [TranslateModule, CircleChartComponent],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {
  protected finishedAmount: number = 7;
  protected unfinishedAmount: number = 4;
  protected delayAmount: number = 2;
}
