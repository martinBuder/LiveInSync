import { Component, OnInit } from '@angular/core';
import { CurrentHomeService } from '../../../services/frontend/current-home.service';
import { UserProfileService } from '../../../services/global/backend/userProfile.service';
import { CommonModule } from '@angular/common';
import { Home } from '../../../interfaces/home';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(
    protected currentHomeService: CurrentHomeService,
    protected userProfileService: UserProfileService
  ) {}
}
