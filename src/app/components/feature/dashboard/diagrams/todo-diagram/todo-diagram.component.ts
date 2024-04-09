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

  private fontColor = getComputedStyle(document.body)
    .getPropertyValue('--font-color')
    .trim();

  protected donePercent!: string;

  ngOnInit(): void {
    this.calcPercent();
    this.erstelleKreisDiagramm();
  }

  calcPercent(): void {
    const all = this.finishedNr + this.unfinishedNr;
    this.donePercent =
      Math.round((this.finishedNr * 100) / all).toString() + '%';
  }

  erstelleKreisDiagramm(): void {
    const daten = {
      labels: ['Erledigt', 'Offen'],
      datasets: [
        {
          label: ' Todos',
          data: [this.finishedNr, this.unfinishedNr],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
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
            ctx.font = '20px Arial'; // Du kannst die Schriftart und -größe hier anpassen
            ctx.fillStyle = this.fontColor; // Textfarbe
            let centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
            let centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
            ctx.fillText(this.donePercent, centerX, centerY);
            ctx.restore();
          },
        },
      ],
    };

    new Chart('kreisDiagrammCanvas', konfiguration);
  }
}
