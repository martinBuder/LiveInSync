import { Time } from '@angular/common';

export interface Appointments {
  title: string;
  id: string;
  date: Date;
  time?: string;
  category?: string;
}
