import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() groupedForm!: FormGroup;
  @Input() formField!: string;
  @Input() inputTitle!: string;
  @Input() withIcon: boolean = false;
  @Input() matIcon?: string;
  @Input() inputValue: string = '';
  @Input() inputType: string = 'text';
  @Input() needTextarea: boolean = false;
  @Input() shouldFocus: boolean = false;
  @Input() hasIconFunction: boolean = false;
  @Input() checkValidStatus: boolean = false;
  @Output() iconClicked = new EventEmitter<void>();
  @Output() enterFunction = new EventEmitter<void>();

  protected onIconClick(): void {
    this.iconClicked.emit();
  }

  protected onEnterPress(): void {
    if (this.groupedForm.valid) this.enterFunction.emit();
  }

  protected getFormControlErrorTranslationKey(formField: string): string {
    const errors = this.groupedForm.controls[formField]?.errors;
    if (!errors) return '';
    const errorCode = Object.keys(errors)[0];
    return `errors.${formField}.${errorCode}`;
  }
}
