import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-shopping-card',
  standalone: true,
  imports: [TranslateModule, BaseChartDirective],
  templateUrl: './shopping-card.component.html',
  styleUrl: './shopping-card.component.scss',
})
export class ShoppingCardComponent {
  kategorieAmount: ChartData<'bar', { key: string; value: number }[]> = {
    datasets: [
      {
        data: [
          { key: 'Edeka', value: 20 },
          { key: 'DM', value: 10 },
          { key: 'Lidl', value: 8 },
          { key: 'Tanke', value: 30 },
        ],
        parsing: {
          xAxisKey: 'key',
          yAxisKey: 'value',
        },
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  };
}
