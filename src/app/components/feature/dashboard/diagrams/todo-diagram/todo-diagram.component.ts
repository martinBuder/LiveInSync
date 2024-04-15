import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-todo-diagram',
  standalone: true,
  imports: [],
  templateUrl: './todo-diagram.component.html',
  styleUrl: './todo-diagram.component.scss',
})
export class TodoDiagramComponent implements OnInit {
  @Input() finishedNr!: number;
  @Input() unfinishedNr!: number;
  @Input() delayNumber!: number;
  protected donePercent!: string;

  private fontColor = getComputedStyle(document.body)
    .getPropertyValue('--font-color')
    .trim();

  ngOnInit(): void {
    this.calcPercent();
    this.erstelleKreisDiagramm();
  }

  calcPercent(): void {
    const all = this.finishedNr + this.unfinishedNr + this.delayNumber;
    this.donePercent =
      Math.round((this.finishedNr * 100) / all).toString() + `%`;
  }

  erstelleKreisDiagramm(): void {
    const daten = {
      labels: [
        'Erledigt: ' + this.finishedNr,
        'Offen: ' + this.unfinishedNr,
        'Überfällig: ' + this.delayNumber,
      ],
      datasets: [
        {
          label: ' Todos',
          data: [this.finishedNr, this.unfinishedNr, this.delayNumber],
          backgroundColor: [
            'rgba(99, 255, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(99, 255, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const konfiguration: ChartConfiguration<'doughnut', number[], string> = {
      type: 'doughnut',
      data: daten,
      plugins: [
        {
          id: 'textInDerMitte',
          afterDraw: (chart) => {
            let ctx = chart.ctx;
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '20px Oswald';
            ctx.fillStyle = this.fontColor;
            let centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            let centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            ctx.fillText(this.donePercent, centerX, centerY - 15);
            ctx.fillText('erledigt', centerX, centerY + 15);
            ctx.restore();
          },
        },
      ],
    };

    new Chart('kreisDiagrammCanvas', konfiguration);
  }
}
