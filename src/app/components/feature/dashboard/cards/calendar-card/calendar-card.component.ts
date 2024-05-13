import { Component } from '@angular/core';
import { Appointments } from '../../../../../interfaces/calender';
import { TranslateModule } from '@ngx-translate/core';
import { DateListComponent } from '../../../../shared/date-list/date-list.component';

@Component({
  selector: 'app-calendar-card',
  standalone: true,
  imports: [TranslateModule, DateListComponent],
  templateUrl: './calendar-card.component.html',
  styleUrl: './calendar-card.component.scss',
})
export class CalendarCardComponent {
  protected nextDates: Array<Appointments> = [
    {
      title: 'Zahnarzttermin',
      id: '1',
      date: new Date('2024-05-15'),
      time: '08:00',
      category: 'Gesundheit',
    },
    {
      title: 'Meeting mit dem Team',
      id: '2',
      date: new Date('2024-05-16'),
      time: '14:00',
      category: 'Arbeit',
    },
    {
      title: 'Geburtstagsfeier',
      id: '3',
      date: new Date('2024-05-20'),
      time: '19:00',
      category: 'Feier',
    },
    {
      title: 'Elternabend',
      id: '4',
      date: new Date('2024-05-22'),
      time: '17:00',
      category: 'Schule',
    },
    {
      title: 'Workshop',
      id: '5',
      date: new Date('2024-05-25'),
      time: '10:00',
      category: 'Bildung',
    },
  ];
}
