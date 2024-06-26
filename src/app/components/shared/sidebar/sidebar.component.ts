import { Component, OnInit } from '@angular/core';
import { CurrentHomeService } from '../../../services/frontend/current-home.service';
import { UserProfileService } from '../../../services/global/backend/userProfile.service';
import { CommonModule } from '@angular/common';
import { Home } from '../../../interfaces/home';
import { TranslateModule } from '@ngx-translate/core';
import { MatIcon } from '@angular/material/icon';
import { UtilService } from '../../../services/utils/util.service';
import { PathService } from '../../../services/global/path.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(
    protected currentHomeService: CurrentHomeService,
    protected userProfileService: UserProfileService,
    protected utilService: UtilService,
    protected pathService: PathService
  ) {}
}
