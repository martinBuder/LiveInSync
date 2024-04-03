import { Component, OnInit } from '@angular/core';
import { NewHomeComponent } from '../../dialogs/new-home/new-home.component';
import { NewHomeUtilService } from '../../../services/utils/new-home-util.service';
import { CommonModule } from '@angular/common';
import { AddHomeComponent } from '../../dialogs/add-home/add-home.component';
import { UserProfileService } from '../../../services/global/backend/userProfile.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NewHomeComponent, AddHomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  constructor(
    protected newHomeUtilService: NewHomeUtilService,
    private userProfileService: UserProfileService
  ) {}

  ngOnInit(): void {
    if (this.userProfileService && this.userProfileService.user) {
      if (
        this.userProfileService.user.homes === undefined ||
        this.userProfileService.user.homes.length <= 0
      )
        this.newHomeUtilService.openAddHomeDialog = true;
    }
  }
}
