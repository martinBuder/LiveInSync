import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StickyHeaderComponent } from './components/shared/sticky-header/sticky-header.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from './services/global/darkmode.service';
import { AuthService } from './services/global/backend/auth.service';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { PathService } from './services/global/path.service';
import { CommonModule } from '@angular/common';
import { UserProfileService } from './services/global/backend/userProfile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    StickyHeaderComponent,
    HeaderComponent,
    SidebarComponent,
  ],
})
export class AppComponent {
  title = 'LifeInSync';

  constructor(
    public translate: TranslateService,
    protected pathService: PathService,
    private darkmodeService: DarkmodeService,
    private authService: AuthService,
    private userProfileService: UserProfileService // because so the user is everywhere actually when we reload this site
  ) {}
}
