import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetHomeComponent } from '../../dialogs/home/get-home/get-home.component';
import { CurrentHomeService } from '../../../services/frontend/current-home.service';
import { CalendarCardComponent } from './cards/calendar-card/calendar-card.component';
import { TodoCardComponent } from './cards/todo-card/todo-card.component';
import { CleaningCardComponent } from './cards/cleaning-card/cleaning-card.component';
import { ShoppingCardComponent } from './cards/shopping-card/shopping-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    GetHomeComponent,
    CalendarCardComponent,
    TodoCardComponent,
    CleaningCardComponent,
    ShoppingCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(protected currentHomeService: CurrentHomeService) {}
}
