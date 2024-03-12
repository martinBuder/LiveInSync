import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../../common/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangedInputComponent } from '../../dialogs/changed-input/changed-input.component';
import { CommonModule } from '@angular/common';

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
  @Output() closing = new EventEmitter<void>();
  @Output() openCloseChange = new EventEmitter<boolean>();

  protected shouldChangedDialogOpen : boolean = false;


  constructor(protected utilService: UtilService) {}

  protected delete():void {

  }

  protected save():void {

    console.log(this.groupedForm.value);
    

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
