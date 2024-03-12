import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { EditableComponent } from '../editable/editable.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/global/firebase.service';
import { Firestore, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, EditableComponent, TranslateModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  // @Input() 
  @Input() groupedForm !: FormGroup;
  @Input() listHeader !: string; 
  protected isAddActivated: boolean = false;
  protected isEditableActivated: boolean[] = [];
  protected itemsArray : Array<any> = [];


  constructor( private firestore: Firestore, private firebaseService: FirebaseService) {
 
  }

  ngOnInit(): void {
    const fireCollection = collection(this.firestore, this.listHeader);
    const subscription = this.firebaseService.getListFromFirebase(fireCollection).subscribe({
      next: (data) => {
        this.itemsArray = data; // Zuweisen der empfangenen Daten zu itemsArray
        console.log(this.itemsArray);
      },
      error: (error) => console.error(error)
    });
    

  }

  openAdd():void {
    this.isAddActivated = !this.isAddActivated;
  }

  openEdit(i: number):void {
    this.isEditableActivated[i] = !this.isEditableActivated[i];
  }


}
