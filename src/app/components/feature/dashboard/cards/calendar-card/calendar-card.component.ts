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
      description: '',
      id: '1',
      date: new Date('2024-05-15'),
      time: '08:00',
      allDay: false,
      category: 'Gesundheit',
    },
    {
      title: 'Meeting mit dem Team',
      description: '',
      id: '2',
      date: new Date('2024-05-16'),
      time: '14:00',
      category: 'Arbeit',
      allDay: false,
    },
    {
      title: 'Geburtstagsfeier',
      description: '',
      id: '3',
      date: new Date('2024-05-20'),
      time: '19:00',
      category: 'Feier',
      allDay: false,
    },
    {
      title: 'Elternabend',
      description: '',
      id: '4',
      date: new Date('2024-05-22'),
      time: '17:00',
      category: 'Schule',
      allDay: false,
    },
    {
      title: 'Workshop',
      description: '',
      id: '5',
      date: new Date('2024-05-25'),
      time: '10:00',
      category: 'Bildung',
      allDay: false,
    },
  ];
}
