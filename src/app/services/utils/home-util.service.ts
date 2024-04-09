import { Injectable } from '@angular/core';
import { FeaturesEnum } from '../../interfaces/home';

@Injectable({
  providedIn: 'root',
})
export class HomeUtilService {
  public openNewHomeDialog: boolean = false;
  public openAddHomeDialog: boolean = false;
  public openCreateHomeDialog: boolean = false;

  constructor() {}

  public newHomeFeatures = [
    {
      name: 'todo' as FeaturesEnum,
      selected: false,
    },
    {
      name: 'shopping' as FeaturesEnum,
      selected: false,
    },
    {
      name: 'cleaning' as FeaturesEnum,
      selected: false,
    },
    {
      name: 'calendar' as FeaturesEnum,
      selected: false,
    },
  ];

  public addHome(): void {
    this.openNewHomeDialog = false;
  }

  public createHome(): void {
    this.openNewHomeDialog = false;
  }
}
