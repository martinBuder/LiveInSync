import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { HomeUtilService } from '../../../../services/utils/home-util.service';

@Component({
  selector: 'app-edit-categories',
  standalone: true,
  imports: [TranslateModule, MatIconModule],
  templateUrl: './edit-categories.component.html',
  styleUrl: './edit-categories.component.scss',
})
export class EditCategoriesComponent {
  constructor(protected homeUtilService: HomeUtilService) {}
}
