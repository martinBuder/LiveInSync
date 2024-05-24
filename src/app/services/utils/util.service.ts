import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  public showInfoDialog: boolean = false;

  constructor(private router: Router) {}

  public closeThis(nextStep: Function, elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) element.classList.add('slide-up');
    setTimeout(() => {
      nextStep();
    }, 200);
  }

  public generateSimpleToken(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public navigateTo(nav: string): void {
    this.router.navigate(['/' + nav]);
  }

  public showTimedDialog(nav?: string): void {
    this.showInfoDialog = true;
    setTimeout(() => {
      this.showInfoDialog = false;
      if (nav !== undefined) this.navigateTo(nav);
    }, 3000);
  }

  public async waitForValue(item: any) {
    while (item === undefined) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
