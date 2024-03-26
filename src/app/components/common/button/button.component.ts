import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnClass !: 'icon-btn' | 'label-icon-btn' | 'text-btn' | 'just-text-btn';
  @Input() matIcon ?: string;
  @Input() label ?: string;
  @Output() buttonClicked = new EventEmitter<void>();

  protected onButtonClick():void {
    this.buttonClicked.emit();
  }

}
