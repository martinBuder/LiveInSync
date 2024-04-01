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
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  infoMessage: string = '';
  noError: boolean = true;

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
    this.noError = false;
    if (errorCode === 'auth/invalid-credential') {
      this.infoMessage = 'errors.auth.wrongLogIn';
    } else {
      this.infoMessage = 'errors.auth.mistakeText';
    }
    this.changNoErrorBoolean();
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
