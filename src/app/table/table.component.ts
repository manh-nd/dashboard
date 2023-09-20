import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export interface TableConfig {
  title?: string;
  displayedColumns?: string[];
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatDividerModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseWidget {
  @Input() config: TableConfig = {};
  dataSource = ELEMENT_DATA;

  override serialize(): NgCompInputs | undefined {
    return {
      config: this.config,
    };
  }
}
