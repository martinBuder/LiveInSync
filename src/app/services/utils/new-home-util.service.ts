import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewHomeUtilService {

  public openNewHomeDialog: boolean = false;

  constructor() { }

  addHome():void {
    this.openNewHomeDialog = false;
  }

  createHome():void {
    this.openNewHomeDialog = false;
  }
}
