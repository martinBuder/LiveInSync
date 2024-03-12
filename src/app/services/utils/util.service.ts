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

  public toggleDialogOpen(booleanItem: boolean) {
    booleanItem = !booleanItem
  }


  
    
}
