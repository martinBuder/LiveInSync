import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private router : Router) { }

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

  public navigateTo(nav : string) {
    this.router.navigate(['/' + nav]);
  }

  

    
}
