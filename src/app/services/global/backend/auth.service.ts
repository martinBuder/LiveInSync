import { Injectable } from '@angular/core';
import {
  Auth,
  EmailAuthProvider,
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
import { Firestore, collection } from '@angular/fire/firestore';
import { UserProfile } from '../../../interfaces/userProfile';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  errorMessage: string | null = null;
  successfulMessage: string | null = null;

  constructor(
    private auth: Auth,
    private userProfileService: UserProfileService,
    private firebaseService: FirebaseService,
    private firestore: Firestore
  ) {
    this.auth = getAuth();
  }

  /**
   * wait that userProfileService.user.id is filled
   */
  async waitForNotNullValue() {
    while (this.userProfileService.user === null) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  async createUser(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      this.userProfileService.user.id = userCredential.user.uid;
      this.firebaseService.setItemToFirebase(
        'AppUsers',
        userCredential.user.uid,
        this.userProfileService.user
      );
    } catch (error: any) {
      const errorCode = error.code;
      if (errorCode === 'this.auth/email-already-in-use') {
        this.errorMessage = 'Dieser Benutzer hat bereits ein Konto.';
      } else {
        this.errorMessage = 'Da ist leider was schief gelaufen.';
      }
      setTimeout(() => {
        this.errorMessage = null;
      }, 2000);
    }
  }

  async userLogIn(email: string, password: string): Promise<void> {
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
    } catch (error) {
      const errorCode = (error as { code?: string }).code;
      this.createErrorMessages(errorCode);
    }
  }

  createErrorMessages(errorCode: any): void {
    if (errorCode === 'auth/invalid-credential') {
      this.errorMessage = 'E-Mail und/oder Passwort ist nicht bekannt.';
    } else {
      this.errorMessage =
        'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
    }
    console.log(this.errorMessage);
    setTimeout(() => {
      this.errorMessage = null;
    }, 2000);
  }

  // async checkFirebaseUser() {
  //   this.auth.onAuthStateChanged((firebaseUser) => {
  //     // this.userProfileService.user.id = firebaseUser;
  //   });
  // }

  /**
   * user will be sign out and the browser navigate to checkIn site
   */
  async fireLogOut() {
    try {
      // const online = false;
      // this.userProfileService.setUserProfile(this.userProfileService.user.id, online);
      // if (this.userProfileService.user.id) {
      //   await this.userProfileService.updateOnlinestatusToProfile(
      //     this.userProfileService.user.id.uid
      //   );
      // }
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
      await updatePassword(user, newPassword)
        .then(() => {
          this.successfulMessage = 'Passwort erfolgreich geändert.';
          setTimeout(() => {
            this.successfulMessage = null;
          }, 2000);
        })
        .catch((error) => {
          if (error)
            this.errorMessage =
              'Da ist leider etwas schief gegangen. Bitte versuche es noch mal.';
          setTimeout(() => {
            this.errorMessage = null;
          }, 2000);
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
}
