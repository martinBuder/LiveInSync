import { Injectable } from '@angular/core';
import {
  Auth,
  EmailAuthProvider,
  UserProfile,
  createUserWithEmailAndPassword,
  getAuth,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  updateProfile,
} from '@angular/fire/auth';
import { UserProfileService } from './userProfile.service';
import { FirebaseService } from './firebase.service';
import { Firestore } from '@angular/fire/firestore';
import { UtilService } from '../../utils/util.service';
import { LocalStorageService } from '../local-storage.service';
import { CurrentHomeService } from '../../frontend/current-home.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  infoMessage: string = '';
  noError: boolean = true;
  user!: UserProfile;

  constructor(
    private auth: Auth,
    private userProfileService: UserProfileService,
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    private utilService: UtilService,
    private currentHomeService: CurrentHomeService
  ) {
    this.auth = getAuth();
    this.checkFirebaseUser();
  }

  public async createUser(email: string, password: string): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.userProfileService.user!.id = userCredential.user.uid;
      this.firebaseService.setItemToFirebase(
        'AppUsers',
        userCredential.user.uid,
        this.userProfileService.user
      );
      this.infoMessage = 'dialogText.userRegisted';
    } catch (error: any) {
      this.noError = false;
      const errorCode = error.code;
      if (errorCode === 'this.auth/email-already-in-use') {
        this.infoMessage = 'errors.auth.userExist';
      } else {
        this.infoMessage = 'errors.auth.mistakeText';
      }
    }
  }

  public async userLogIn(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.userProfileService.user = await this.firebaseService.getFireDoc(
        'AppUsers',
        userCredential.user.uid
      );
      this.setCurrentHome();
      this.utilService.navigateTo('dashboard');
    } catch (error) {
      const errorCode = (error as { code?: string }).code;
      this.createErrorMessages(errorCode);
    }
  }

  private async setCurrentHome(): Promise<void> {
    if (this.userProfileService.user?.mainHome)
      await this.currentHomeService.getCurrentHome(
        this.userProfileService.user.mainHome
      );
    // this.localStorageService.saveInLocalStorage(
    //   this.currentHomeService.currentHome.id,
    //   'currentHome'
    // );
    // console.log(this.currentHomeService.currentHome);
  }

  public createErrorMessages(errorCode: any): void {
    this.noError = false;
    if (errorCode === 'auth/invalid-credential') {
      this.infoMessage = 'errors.auth.wrongLogIn';
    } else {
      this.infoMessage = 'errors.auth.mistakeText';
    }
    this.changNoErrorBoolean();
  }

  public async checkFirebaseUser(): Promise<void> {
    this.auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        this.userProfileService.user = await this.firebaseService.getFireDoc(
          'AppUsers',
          firebaseUser.uid
        );
      }
      // const homeId =
      //   this.localStorageService.getFromLocalStorage('currentHome');
      // console.log(homeId);

      // this.currentHomeService.getCurrentHome(homeId);
      // console.log(this.currentHomeService.currentHome);
    });
  }

  public async fireLogOut(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {}
  }

  async sendFireResetMail(email: string) {
    sendPasswordResetEmail(this.auth, email);
  }

  async resetFireAuth(newResetPassword: string) {
    const user = this.auth.currentUser;
    const newPassword = newResetPassword;
    if (user !== null) {
      await updatePassword(user, newPassword).catch((error) => {
        if (error) this.infoMessage = 'errors.auth.mistakeText';
        this.changNoErrorBoolean();
      });
    }
  }

  // async updateFireAuthMail(newAuthMail: string, confirmPassword: string) {
  //   if (this.auth.currentUser) {
  //     const credential = EmailAuthProvider.credential(
  //       this.userProfileService.user.id.email,
  //       confirmPassword
  //     );
  //     await reauthenticateWithCredential(
  //       this.userProfileService.user.id,
  //       credential
  //     );
  //     await updateEmail(this.auth.currentUser, newAuthMail);
  //   }
  //   console.log(this.auth.currentUser);
  // }

  changNoErrorBoolean(): void {
    setTimeout(() => {
      this.infoMessage = '';
      this.noError = true;
    }, 2000);
  }
}
