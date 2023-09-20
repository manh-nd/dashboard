import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

export interface StatusConfig {
  title?: string;
}

const statuses = ['Down', 'Maintenance', 'Running', 'Available'];

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent extends BaseWidget implements OnInit, OnDestroy {
  @Input() config: StatusConfig = {};

  status: string = statuses[0];
  intervalId: any | undefined;

  override serialize(): NgCompInputs | undefined {
    return {
      config: this.config,
    };
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.status = statuses[Math.round(Math.random() * 2)];
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
