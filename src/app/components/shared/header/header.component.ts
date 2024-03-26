import { Component, OnInit } from '@angular/core';
import { LogoImgComponent } from '../../common/logo/logo.component';
import { SettingMenuComponent } from '../setting-menu/setting-menu.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../common/button/button.component';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UtilService } from '../../../services/utils/util.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    LogoImgComponent,
    SettingMenuComponent,
    ButtonComponent,
    CommonModule,
    TranslateModule
  ],
})


export class HeaderComponent implements OnInit {

  private startHeader: string = '/' || '/signIn';
  protected showStartMenu !: boolean;
  protected menuOpen: boolean = false;
  
  constructor(private router: Router, protected utilService : UtilService) { }

  ngOnInit():void {   
    this.showStartMenu = this.router.url === this.startHeader;   
  }

  public closeMenu(): void {
    this.menuOpen = false;
  }
}



