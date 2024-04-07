import { Injectable } from '@angular/core';
import { UtilService } from '../utils/util.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private utilService: UtilService) {}

  public saveInLocalStorage(value: string, key: string): void {
    if (typeof localStorage !== 'undefined') {
      let valueAsText = JSON.stringify(value);
      localStorage.setItem(key, valueAsText);
    }
  }

  /**
   * get the user-Array from localStorage so that user is on every site
   */
  public getFromLocalStorage(key: string): string {
    if (typeof localStorage !== 'undefined') {
      let itemAsText = localStorage.getItem(key);
      if (itemAsText) return JSON.parse(itemAsText);
      else {
        const listHeader = key + this.utilService.generateSimpleToken(25);
        this.saveInLocalStorage(listHeader, key);
        return listHeader;
      }
    } else return '';
  }
}
