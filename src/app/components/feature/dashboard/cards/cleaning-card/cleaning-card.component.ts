import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CircleChartComponent } from '../../diagrams/circle-diagram/circle-diagram.component';

@Component({
  selector: 'app-cleaning-card',
  standalone: true,
  imports: [TranslateModule, CircleChartComponent],
  templateUrl: './cleaning-card.component.html',
  styleUrl: './cleaning-card.component.scss',
})
export class CleaningCardComponent {
  protected finishedAmount: number = 0;
  protected unfinishedAmount: number = 2;
  protected delayAmount: number = 0;
}
