import { Component } from '@angular/core';
import { LogoImgComponent } from "../../common/logo/logo.component";
import { HeaderMenuComponent } from "../main-menu/main-menu.component";
import { DarkmodeService } from '../../../services/global/darkmode.service';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [LogoImgComponent, HeaderMenuComponent]
})
export class HeaderComponent {

    constructor(    private darkmodeService: DarkmodeService
        ) {

    }

}
