import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
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

  protected onIconClick():void {
    this.iconClicked.emit();
  }
}
