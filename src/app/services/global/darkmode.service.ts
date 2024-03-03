import { AfterViewInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DarkmodeService {
  private darkmodeState!: BehaviorSubject<boolean>; 

	constructor() { 
    this.darkmodeState = new BehaviorSubject(this.detectDarkmode()); 
    this.darkmodeState.subscribe((state:boolean) => {    
      console.log(state);
       
  	  if(state) this.setDarkmode()
	    else this.setLightmode()
    })
  }


	public toogleDarkmode(): void {
		this.darkmodeState.next(!this.darkmodeState.getValue());
  }

  public detectDarkmode():boolean {
    if (typeof window !== 'undefined') {
      const mediaMatch = window.matchMedia('(prefers-color-scheme: dark)').matches;
      console.log(mediaMatch);
      
      return mediaMatch;
    }
    return false;
   
	}

	private setLightmode():void {
    if (typeof document !== 'undefined') {
      document.body.classList.add('lightmode');
      document.body.classList.remove('darkmode');
      document.body.setAttribute('data-theme', 'light');
    }

	}

	private setDarkmode():void {
    if (typeof document !== 'undefined') {
      document.body.classList.add('darkmode');
      document.body.classList.remove('lightmod');
      document.body.setAttribute('data-theme', 'dark');
    }    
	}
}

