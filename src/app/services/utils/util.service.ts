import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public closeThis(nextStep: Function, elementId: string):void {   
    const element = document.getElementById(elementId);
    if (element) element.classList.add('slide-up');
    setTimeout(() => {
      nextStep();
    }, 200)
  }

  public generateSimpleToken(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  

    
}
