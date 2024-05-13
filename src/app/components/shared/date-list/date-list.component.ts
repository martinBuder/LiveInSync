import { Component, Input } from '@angular/core';
import { Appointments } from '../../../interfaces/calender';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-list.component.html',
  styleUrl: './date-list.component.scss',
})
export class DateListComponent {
  @Input() dateArray: Array<Appointments> = [];
}
