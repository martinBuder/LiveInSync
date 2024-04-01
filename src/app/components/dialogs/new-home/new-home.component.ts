import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [TranslateModule, ButtonComponent],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss',
})
export class NewHomeComponent {
  @Output() createHomeClicked = new EventEmitter<void>();
  @Output() addHomeClicked = new EventEmitter<void>();

  protected createHome(): void {
    this.createHomeClicked.emit();
  }

  protected addHome(): void {
    this.addHomeClicked.emit();
  }
}
