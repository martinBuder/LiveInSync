import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableComponent } from '../editable/editable.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FirebaseService } from '../../../services/global/backend/firebase.service';
import { Firestore, collection } from '@angular/fire/firestore';
import { LocalStorageService } from '../../../services/global/local-storage.service';
import { Todo } from '../../../interfaces/todo';
import { ButtonComponent } from '../../common/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { CurrentHomeService } from '../../../services/frontend/current-home.service';
import { Category } from '../../../interfaces/category';
import { SelectComponent } from '../../common/select/select.component';
import { CheckboxComponent } from '../../common/checkbox/checkbox.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    ButtonComponent,
    EditableComponent,
    CheckboxComponent,
    TranslateModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  @Input() groupedForm!: FormGroup;
  @Input() categories?: Array<Category>;
  @Input() listHeader!: string;
  protected currentCategory?: Category;
  protected isAddActivated: boolean = false;
  protected listModus: 'edit' | 'select' = 'select';
  protected isEditableActivated: boolean[] = [];
  protected itemsArray: Array<any> = [];
  protected selectedArray: Array<number> = [];

  protected fireListHeader!: string;

  constructor(
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    private currentHomeService: CurrentHomeService
  ) {}

  ngOnInit(): void {
    // if (typeof window !== 'undefined') {
    // this.fireListHeader = this.localStorageService.getFromLocalStorage(
    //   this.listHeader
    // );
    this.fireListHeader =
      this.currentHomeService.currentHome.id + this.listHeader;
    this.firebaseService.getListFromFirebase(this.fireListHeader).subscribe({
      next: (data) => {
        this.itemsArray = data;
        this.closeAllEdits();
      },
      error: (error) => console.error(error),
    });
    // }
  }

  protected onCategoryChange($event: Category) {
    this.currentCategory = $event;
  }

  protected openAdd(): void {
    if (this.areAllEditFalse() && this.isAddActivated === false)
      this.isAddActivated = true;
  }

  protected openEdit(i: number): void {
    if (this.areAllEditFalse() && this.isAddActivated === false) {
      this.isEditableActivated[i] = true;
      this.groupedForm.patchValue(this.itemsArray[i]);
    }
  }

  protected selectItem(i: number): void {
    const index = this.selectedArray.indexOf(i);
    if (index === -1) {
      this.selectedArray.push(i);
      this.itemsArray[i].selected = true;
    } else {
      this.selectedArray.splice(index, 1);
      this.itemsArray[i].selected = false;
    }
    console.log(this.itemsArray[i]);

    this.firebaseService.updateFireItem(
      this.fireListHeader,
      this.itemsArray[i].id,
      this.itemsArray[i]
    );
  }

  protected deleteAll(): void {
    this.selectedArray.forEach((index) => {
      this.firebaseService.deleteFireItem(
        this.fireListHeader,
        this.itemsArray[index].id
      );
    });
    this.selectedArray = [];
  }

  protected areAllEditFalse(): boolean {
    return this.isEditableActivated.every((value) => value === false);
  }

  protected closeAllEdits(): void {
    this.isAddActivated = false;
    for (let i = 0; i < this.isEditableActivated.length; i++) {
      this.isEditableActivated[i] = false;
    }
  }
}
