import { Injectable, OnInit } from '@angular/core';
import { UserProfile } from '../../../interfaces/userProfile';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private _user: UserProfile | null = null;
  public get user(): UserProfile | null {
    return this._user;
  }
  public set user(v: UserProfile) {
    this._user = v;
    this.isUserLoaded = true;
  }

  public isUserLoaded: boolean = false;

  constructor() {}
}
