import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonComponent } from '../button/button.component';
import { EditableComponent } from '../editable/editable.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, EditableComponent, TranslateModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  // @Input() itemsArray !: Observable<any>
  @Input() groupedForm !: FormGroup;
  @Input() itemsArray !: Array<any>;
  @Input() listHeader !: string; 
  protected isAddActivated: boolean = false;
  protected isEditableActivated: boolean[] = [];


  constructor() {
    this.itemsArray = [
      // {title: 'test'},
      // {title: 'test'},
      // {title: 'test'}
    ]
  }

  openAdd() {
    this.isAddActivated = !this.isAddActivated;
  }

  openEdit(i: number) {
    this.isEditableActivated[i] = !this.isEditableActivated[i];
  }


}
