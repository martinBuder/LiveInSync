import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // *Arrays for firebaseFill
  [key: string]: any; // ~ this we need to make from a string a variable name

  constructor(private firestore: Firestore) {}

  public getListFromFirebase(fireCollection: any): Observable<any> {
    return new Observable((subscriber) => {
      onSnapshot(
        query(fireCollection),
        (querySnapshot) => {
          let projectArray: any = [];
          querySnapshot.forEach((doc) => {
            const itemJson: any = doc.data();
            itemJson['id'] = doc.id;
            projectArray.push(itemJson);
          });
          subscriber.next(projectArray);
        },
        (error) => {
          subscriber.error(error);
        }
      );
    });
  }

  public async getQueryListFromFirebase(
    fireCollection: any,
    fireQuery: any,
    fireArray: string
  ): Promise<void> {
    onSnapshot(query(fireCollection, fireQuery), (querySnapshot) => {
      let projectArray: any = [];
      querySnapshot.forEach((doc) => {
        const itemJson: any = doc.data();
        itemJson['id'] = doc.id;
        projectArray.push(itemJson);
        this[fireArray] = projectArray;
      });
    });
  }

  public async setItemToFirebase(
    fireList: string,
    fireListId: any,
    item: any
  ): Promise<void> {
    const fireCollection = collection(this.firestore, fireList);
    const fireDocRef = doc(fireCollection, fireListId);
    await setDoc(fireDocRef, item);
  }

  public async addItemToFirebase(fireList: any, item: any): Promise<void> {
    await addDoc(fireList, item);
  }

  public async updateFireItem(
    fireList: string,
    id: string,
    item: any
  ): Promise<void> {
    const fireCollection = collection(this.firestore, fireList);
    const itemRef = doc(fireCollection, id);
    await updateDoc(itemRef, item);
  }

  public deleteFireItem(fireList: any, id: string): void {
    const fireCollection = collection(this.firestore, fireList);
    const userDoc = doc(fireCollection, id);
    deleteDoc(userDoc);
  }

  public async getFireDoc(fireList: string, id: string): Promise<any> {
    const fireCollection = collection(this.firestore, fireList);
    const docRef = doc(fireCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  }
}
