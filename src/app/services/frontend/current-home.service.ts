import { Injectable, OnInit } from '@angular/core';
import { Home } from '../../interfaces/home';
import { UserProfileService } from '../global/backend/userProfile.service';
import { FirebaseService } from '../global/backend/firebase.service';
import { UtilService } from '../utils/util.service';
import { LocalStorageService } from '../global/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentHomeService {
  public currentHome: Home = {
    name: 'startHome',
    id: 'startId',
    adminUserId: 'startUserId',
    features: [],
  };

  constructor(
    private userProfileService: UserProfileService,
    private firebaseService: FirebaseService,
    private utilService: UtilService
  ) {}

  public async getCurrentHome(homeId: string) {
    this.currentHome = await this.firebaseService.getFireDoc(
      'allHomes',
      homeId as string
    );
  }

  public spliceHomeName(homeId: string): string {
    const lastIndex = homeId.lastIndexOf('~');
    const homeName = homeId.substring(0, lastIndex);
    return homeName;
  }
}
