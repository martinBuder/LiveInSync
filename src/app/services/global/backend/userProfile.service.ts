import { Injectable, OnInit } from '@angular/core';
import { UserProfile } from '../../../interfaces/userProfile';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  user: UserProfile | null = null;

  constructor() {}
}
