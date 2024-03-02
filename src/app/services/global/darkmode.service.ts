import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DarkmodeService {
  private darkmodeState: BehaviorSubject<boolean> = new BehaviorSubject(this.detectDarkmode()); 

	constructor() {
		this.darkmodeState.subscribe((state:boolean) => {
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
      return mediaMatch;
    }
    return false;
    // const mediaMatch = window.matchMedia('(prefers-color-scheme)').matches;
    // return typeof mediaMatch === 'boolean' ? mediaMatch : false;
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

