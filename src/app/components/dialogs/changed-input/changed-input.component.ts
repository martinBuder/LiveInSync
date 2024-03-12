import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-changed-input',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './changed-input.component.html',
  styleUrl: './changed-input.component.scss'
})
export class ChangedInputComponent {

  @Output() close = new EventEmitter<void>();
  @Output() return = new EventEmitter<void>();


  protected yes():void {
    this.close.emit();
  }

  protected no():void {
    this.return.emit();
  }

}
