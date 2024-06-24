import { Injectable } from '@angular/core';
import { Home } from '../../interfaces/home';
import { FirebaseService } from '../global/backend/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentHomeService {
  public currentHome: Home = {
    name: 'startHome',
    id: 'startId',
    adminUsersId: ['startUserId'],
    features: [],
  };

  constructor(private firebaseService: FirebaseService) {}

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
