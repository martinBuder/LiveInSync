import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../../common/checkbox/checkbox.component';

@Component({
  selector: 'app-select-area',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './select-area.component.html',
  styleUrl: './select-area.component.scss',
})
export class SelectAreaComponent {
  @Input() selectArray: Array<any> = [];
}
