import { Component, ViewChild } from '@angular/core';
import {
  GridstackComponent,
  NgGridStackOptions,
  NgGridStackWidget,
} from 'gridstack/dist/angular';
import { ChartComponent, ChartConfig } from './chart/chart.component';
import { StatusComponent, StatusConfig } from './status/status.component';
import { TableComponent, TableConfig } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(GridstackComponent) gridstack?: GridstackComponent;

  constructor() {
    GridstackComponent.addComponentToSelectorType([
      ChartComponent,
      StatusComponent,
      TableComponent,
    ]);
  }

  items: NgGridStackWidget[] = [
    {
      x: 0,
      y: 0,
      selector: 'app-chart',
      id: '1',
      input: {
        config: {
          title: 'Statistics',
        } as ChartConfig,
      },
      w: 4,
      h: 4,
    },
    {
      x: 1,
      y: 0,
      selector: 'app-status',
      id: '2',
      input: {
        config: {
          title: 'Availability Status',
        } as StatusConfig,
      },
      w: 2,
    },
    {
      x: 4,
      y: 0,
      w: 8,
      h: 4,
      selector: 'app-table',
      id: '3',
      input: {
        config: {
          title: 'Table',
          displayedColumns: ['position', 'name', 'weight', 'symbol'],
        } as TableConfig,
      },
    },
  ];

  gridOptions: NgGridStackOptions = {
    margin: 5,
    minRow: 1,
    column: 12,
    cellHeight: 150,
    cellHeightUnit: 'px',
    resizable: {
      handles: 'e,se,s,sw,w',
    },
    children: this.items,
  };

  save() {
    const serializedData = this.gridstack?.grid?.save();
    console.log(serializedData);
  }

  identity(w: NgGridStackWidget) {
    return w.id;
  }
}
