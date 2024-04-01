import { Injectable } from '@angular/core';
import { UserProfile } from '../../../interfaces/userProfile';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  user!: UserProfile;

  constructor() {}

  setAppUser(): void {}
}
