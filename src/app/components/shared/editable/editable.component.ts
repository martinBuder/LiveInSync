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
import { Todo } from '../../../interfaces/todo';

@Component({
  selector: 'app-editable',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, TranslateModule, MatIconModule, ReactiveFormsModule, ChangedInputComponent],
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss'
})
export class EditableComponent implements OnInit{
  @Input() groupedForm !: FormGroup;
  @Input() item ?: Todo;
  @Input() listTitle !: string;
  @Input() fireListHeader !: string;
  @Output() closeEdit = new EventEmitter<void>();
  

  protected shouldChangedDialogOpen : boolean = false;
  private fireCollection !: any;


  constructor(protected utilService: UtilService, private firestore: Firestore,
    private firebaseService: FirebaseService) {

    }

  ngOnInit(): void {
      this.fireCollection = collection(this.firestore, this.fireListHeader); 
    }

  protected delete():void {
    if(this.item?.id) this.firebaseService.deleteFireItem(this.fireListHeader, this.item.id);
    this.utilService.closeThis(this.closeWindow, 'editableClose');
  }

  protected save():void {
    const todo: Todo = { ...this.groupedForm.value };
    this.utilService.closeThis(this.closeWindow, 'editableClose');
    if (this.item?.id) 
      this.firebaseService.updateFireItem(this.fireCollection, this.item.id, todo);
    else {
      const token = this.utilService.generateSimpleToken(10);
      this.firebaseService.setItemToFirebase(this.fireListHeader, token, todo);
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
