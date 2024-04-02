import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewHomeUtilService {
  public openNewHomeDialog: boolean = false;
  public openAddHomeDialog: boolean = false;
  public openCreateHomeDialog: boolean = false;

  constructor() {}

  newHomeFeatures = [
    {
      name: 'todo',
      selected: false,
    },
    {
      name: 'shopping',
      selected: false,
    },
    {
      name: 'cleaning',
      selected: false,
    },
    {
      name: 'calendar',
      selected: false,
    },
  ];

  addHome(): void {
    this.openNewHomeDialog = false;
  }

  createHome(): void {
    this.openNewHomeDialog = false;
  }
}
