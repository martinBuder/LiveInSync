import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputComponent } from '../../common/input/input.component';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';
import { MatIconModule } from '@angular/material/icon';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChangedInputComponent } from '../../dialogs/changed-input/changed-input.component';
import { CommonModule } from '@angular/common';
import { FirebaseService } from '../../../services/global/backend/firebase.service';
import { Firestore, collection } from '@angular/fire/firestore';
import { Todo } from '../../../interfaces/todo';
import { ButtonComponent } from '../../common/button/button.component';
import { CheckboxComponent } from '../../common/checkbox/checkbox.component';
import { SelectComponent } from '../../common/select/select.component';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-editable',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    SelectComponent,
    TranslateModule,
    MatIconModule,
    ReactiveFormsModule,
    ChangedInputComponent,
  ],
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss',
})
export class EditableComponent {
  @Input() groupedForm!: FormGroup;
  @Input() item?: any;
  @Input() categoriesArray?: Category[];
  @Input() currentCategory?: Category;
  @Input() listTitle!: string;
  @Input() fireListHeader!: string;
  @Input() isJustAddItem: boolean = false;
  @Output() closeEdit = new EventEmitter<void>();

  protected shouldChangedDialogOpen: boolean = false;

  constructor(
    protected utilService: UtilService,
    private firebaseService: FirebaseService
  ) {}

  protected delete(): void {
    if (this.item?.id)
      this.firebaseService.deleteFireItem(this.fireListHeader, this.item.id);
    this.utilService.closeThis(this.closeWindow, 'editableClose');
  }

  protected save(): void {
    const item: any = { ...this.groupedForm.value };
    this.utilService.closeThis(this.closeWindow, 'editableClose');
    if (this.item?.id)
      this.firebaseService.updateFireItem(
        this.fireListHeader,
        this.item.id,
        item
      );
    else {
      const token = this.utilService.generateSimpleToken(10);
      this.firebaseService.setItemToFirebase(this.fireListHeader, token, item);
    }
  }

  protected cancel(): void {
    if (!this.groupedForm.dirty)
      this.utilService.closeThis(this.closeWindow, 'editableClose');
    else this.shouldChangedDialogOpen = true;
  }

  public closeWindow = (): void => {
    this.groupedForm.reset();
    this.closeEdit.emit();
  };

  public onCategoryChange(category: Category) {
    this.item.category = category;
  }
}
