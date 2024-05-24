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

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    SelectComponent,
    ButtonComponent,
    EditableComponent,
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
  protected currentCategory: Category | null = null;
  protected isAddActivated: boolean = false;
  protected isEditableActivated: boolean[] = [];
  protected itemsArray: Array<any> = [];

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

  openAdd(): void {
    if (
      this.isEditableActivated.every((value) => value === false) &&
      this.isAddActivated === false
    )
      this.isAddActivated = true;
  }

  openEdit(i: number): void {
    if (
      this.isEditableActivated.every((value) => value === false) &&
      this.isAddActivated === false
    ) {
      this.isEditableActivated[i] = !this.isEditableActivated[i];
      this.groupedForm.patchValue(this.itemsArray[i]);
    }
  }

  closeAllEdits(): void {
    this.isAddActivated = false;
    for (let i = 0; i < this.isEditableActivated.length; i++) {
      this.isEditableActivated[i] = false;
    }
  }
}
