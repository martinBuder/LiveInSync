import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangedInputComponent } from '../../dialogs/changed-input/changed-input.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../../services/global/firebase.service';
import { Firestore, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-editable',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, TranslateModule, MatIconModule, ReactiveFormsModule, ChangedInputComponent],
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss'
})
export class EditableComponent implements OnInit{
  @Input() groupedForm !: FormGroup;
  @Input() item ?: any;
  @Input() listTitle !: string;
  @Output() closeEdit = new EventEmitter<void>();
  

  protected shouldChangedDialogOpen : boolean = false;
  private fireCollection !: any;


  constructor(protected utilService: UtilService, private firestore: Firestore,
    private firebaseService: FirebaseService) {

    }

  ngOnInit(): void {
      this.fireCollection = collection(this.firestore, this.listTitle); 
    }

  protected delete():void {
    this.firebaseService.deleteFireItem(this.listTitle, this.item.id);
    this.utilService.closeThis(this.closeWindow, 'editableClose');
  }

  protected save():void {
    const todo = {
      title: this.groupedForm.value.title,
      description: this.groupedForm.value.description,
      done: this.groupedForm.value.done,
      read: this.groupedForm.value.read,
    }
    console.log(this.item);
    this.utilService.closeThis(this.closeWindow, 'editableClose');
    if (!this.item) {
      const token = this.utilService.generateSimpleToken(10);
      this.firebaseService.setItemToFirebase(this.listTitle, token, todo);
    } else {
      this.firebaseService.updateFireItem(this.fireCollection, this.item.id, todo);
    }
  }

  protected cancel(): void {
    if(!this.groupedForm.dirty) this.utilService.closeThis(this.closeWindow, 'editableClose')
    else this.shouldChangedDialogOpen = true;
  }

  public closeWindow = ():void => {
    this.groupedForm.reset();
    this.closeEdit.emit();
  }



}
