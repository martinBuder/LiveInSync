import { Injectable } from '@angular/core';
import { FeaturesEnum } from '../../interfaces/home';

@Injectable({
  providedIn: 'root',
})
export class HomeUtilService {
  public openNewHomeDialog: boolean = false;
  public openAddHomeDialog: boolean = false;
  public openCreateHomeDialog: boolean = false;
  public openConnectHomeDialog: boolean = false;
  public openShareHomeDialog: boolean = false;
  public openSettingHomeDialog: boolean = false;
  public openEditCategoriesDialog: boolean = false;

  constructor() {}

  public homeFeatures = [
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

  public returnHomeFeatures(): FeaturesEnum[] {
    const featuresArray: FeaturesEnum[] = [];
    this.homeFeatures.forEach((feature) => {
      if (feature.selected === true) featuresArray.push(feature.name);
    });
    return featuresArray;
  }

  public addHome(): void {
    this.openNewHomeDialog = false;
  }

  public createHome(): void {
    this.openNewHomeDialog = false;
  }
}
