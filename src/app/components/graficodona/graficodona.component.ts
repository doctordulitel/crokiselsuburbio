import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styleUrls: []
})
export class GraficodonaComponent implements OnInit {

  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet = [];
  @Input() chartType: ChartType = 'doughnut';

  

  constructor() { }

  ngOnInit() {
  }

}
