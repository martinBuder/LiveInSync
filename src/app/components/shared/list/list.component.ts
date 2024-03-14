import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { EditableComponent } from '../editable/editable.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/global/firebase.service';
import { Firestore, collection } from '@angular/fire/firestore';
import { LocalStorageService } from '../../../services/global/local-storage.service';
import { Todo } from '../../../interfaces/todo';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, EditableComponent, TranslateModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  @Input() groupedForm !: FormGroup;
  @Input() listHeader !: string; 
  protected isAddActivated: boolean = false;
  protected isEditableActivated: boolean[] = [];
  protected itemsArray : Array<Todo> = [];

  private fireCollection !: any;
  protected fireListHeader !: string;


  constructor( private firestore: Firestore, private firebaseService: FirebaseService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.fireListHeader = this.localStorageService.getFromLocalStorage(this.listHeader)
      this.fireCollection = collection(this.firestore, this.fireListHeader);
      this.firebaseService.getListFromFirebase(this.fireCollection).subscribe({
        next: (data) => {
          this.itemsArray = data;
          this.closeAllEdits();
      },
        error: (error) => console.error(error)
      }); 
    } 
  }

  openEdit(i: number):void {
    this.isEditableActivated[i] = !this.isEditableActivated[i];
    this.groupedForm.patchValue(this.itemsArray[i])
  }

  closeAllEdits() {
    this.isAddActivated = false;
    for (let i = 0; i < this.isEditableActivated.length; i++) {
      this.isEditableActivated[i] = false;
    }
  }
}
