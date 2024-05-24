import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-message',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './dialog-message.component.html',
  styleUrl: './dialog-message.component.scss',
})
export class DialogMessageComponent {
  @Input() isSuccessHeader: boolean = true;
  @Input() text!: string;
  @Input() header: string = 'dialogHeader.successful';
}
