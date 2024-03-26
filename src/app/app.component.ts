import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { StickyHeaderComponent } from "./components/shared/sticky-header/sticky-header.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from './services/global/darkmode.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, StickyHeaderComponent, HeaderComponent],
 
})
export class AppComponent {
  title = 'LifeInSync';
 


  constructor(
    public translate: TranslateService,
    private darkmodeService: DarkmodeService,
    ) {

  }

}

