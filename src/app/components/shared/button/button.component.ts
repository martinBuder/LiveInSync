import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnClass !: string;
  @Input() matIcon ?: string;
  @Output() buttonClicked = new EventEmitter<void>();

  protected onButtonClick() {
    this.buttonClicked.emit();
  }
}
