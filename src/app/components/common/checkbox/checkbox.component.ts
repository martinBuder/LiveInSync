import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() groupedForm?: FormGroup;
  @Input() formField?: string;
  @Input() checkboxTitle!: string;
  @Input() checkboxValue: boolean = false;
  @Output() checkboxValueChange = new EventEmitter<boolean>();

  protected onCheckboxChange(newValue: boolean): void {
    this.checkboxValue = newValue;
    this.checkboxValueChange.emit(newValue);
  }
}
