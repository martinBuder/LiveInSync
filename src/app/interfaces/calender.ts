import { Time } from '@angular/common';

export interface Appointments {
  id?: string;
  title: string;
  description: string;
  allDay: boolean;
  date: Date;
  time?: string;
  duration?: string;
  category?: string;
}
