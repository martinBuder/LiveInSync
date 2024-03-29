import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-saved-password',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './saved-password.component.html',
  styleUrl: './saved-password.component.scss',
})
export class SavedPasswordComponent {}
