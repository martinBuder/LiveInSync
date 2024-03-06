import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input() inputTitle !: string;
  @Input() withIcon : boolean = false;
  @Input() matIcon ?: string;
  @Input() inputValue : string = '';
  @Input() inputType : string = 'text'
  @Input() needTextarea: boolean = false;
  @Input() shouldFocus: boolean = false;

}
