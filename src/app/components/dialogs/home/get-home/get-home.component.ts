import { CommonModule } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { NewHomeComponent } from '../new-home/new-home.component';
import { AddHomeComponent } from '../add-home/add-home.component';
import { HomeUtilService } from '../../../../services/utils/home-util.service';
import { UserProfileService } from '../../../../services/global/backend/userProfile.service';
import { ConnectHomeComponent } from '../connect-home/connect-home.component';
import { ShareHomeComponent } from '../share-home/share-home.component';

@Component({
  selector: 'app-get-home',
  standalone: true,
  templateUrl: './get-home.component.html',
  styleUrl: './get-home.component.scss',
  imports: [
    CommonModule,
    NewHomeComponent,
    AddHomeComponent,
    ConnectHomeComponent,
    ShareHomeComponent,
  ],
})
export class GetHomeComponent implements AfterContentInit {
  constructor(
    protected homeUtilService: HomeUtilService,
    private userProfileService: UserProfileService
  ) {}

  ngAfterContentInit(): void {
    if (this.userProfileService && this.userProfileService.user) {
      if (
        this.userProfileService.user.homes === undefined ||
        this.userProfileService.user.homes.length <= 0
      )
        this.homeUtilService.openAddHomeDialog = true;
    }
  }
}
