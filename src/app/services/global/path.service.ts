import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  public isStartPath: boolean = false;
  private startPaths: string[] = [
    '/',
    '/register',
    '/forgotPassword',
    '/newPassword',
  ];

  public urlFeature!: string;

  constructor(private router: Router) {
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        console.log(x.url);
        this.checkWhichHeader(x.url);
      }
    });
  }

  private checkWhichHeader(url: string): void {
    if (this.startPaths.includes(url)) {
      this.isStartPath = true;
    } else {
      this.isStartPath = false;
      this.urlFeature = url;
    }
  }
}
