import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangedInputComponent } from '../../dialogs/changed-input/changed-input.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../../services/global/firebase.service';

@Component({
  selector: 'app-editable',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, TranslateModule, MatIconModule, ReactiveFormsModule, ChangedInputComponent],
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss'
})
export class EditableComponent {
  @Input() groupedForm !: FormGroup;
  @Input() item?: any;
  @Input() openClose !:boolean;
  @Input() listTitle !: string;
  @Output() closing = new EventEmitter<void>();
  @Output() openCloseChange = new EventEmitter<boolean>();

  protected shouldChangedDialogOpen : boolean = false;


  constructor(protected utilService: UtilService,
    private firebaseService: FirebaseService) {}

  protected delete():void {

  }

  protected async save():Promise<void> {
    const todo = {
      title: this.groupedForm.value.title,
      description: this.groupedForm.value.description,
      done: this.groupedForm.value.done,
      read: this.groupedForm.value.read,
    }
    
    const token = this.utilService.generateSimpleToken(10);
    
    await this.firebaseService.setItemToFirebase(this.listTitle, token, todo);
    this.groupedForm.reset();
    this.utilService.closeThis(this.closeWindow, 'editableClose')
  }

  protected cancel(): void {
    if(!this.groupedForm.dirty) this.utilService.closeThis(this.closeWindow, 'editableClose')
    else this.shouldChangedDialogOpen = true;
  }

  public closeWindow = ():void => {         
    this.openClose = !this.openClose;
    this.openCloseChange.emit(this.openClose);
  }



}
