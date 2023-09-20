import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

export interface ChartConfig {
  title?: string;
}

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgChartsModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent extends BaseWidget {
  @Input() config: ChartConfig = {};

  selectedChart = 'line';

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  lineChartLegend = true;

  pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  pieChartLegend = true;
  pieChartPlugins = [];

  override serialize(): NgCompInputs | undefined {
    return {
      config: this.config,
    };
  }
}
