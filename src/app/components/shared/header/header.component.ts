import { Component } from '@angular/core';
import { LogoImgComponent } from "../../common/logo/logo.component";
import { SettingMenuComponent } from "../setting-menu/setting-menu.component";
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        LogoImgComponent, 
        SettingMenuComponent, 
        ButtonComponent, 
        CommonModule
    ]
})
export class HeaderComponent {

    menuOpen: boolean = false;

    constructor() {}

}
