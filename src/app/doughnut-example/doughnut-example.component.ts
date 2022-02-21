import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-doughnutlabel-v3';

@Component({
  selector: 'app-doughnut-example',
  templateUrl: './doughnut-example.component.html',
  styleUrls: ['./doughnut-example.component.css'],
})
export class DoughnutExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
      this.drawChart();
  }

  // See the note below (in draw chart) for the reason this is commented out:
  // @ViewChild('chart1', {static: true}) exampleCanvas: ElementRef<HTMLCanvasElement>;

  DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];

  DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];

  private sampleChart: Chart;

  randomizeData() {
    this.sampleChart.config.data.datasets[0].data = [
      this.randomScalingFactor(),
      this.randomScalingFactor(),
      this.randomScalingFactor(),
      this.randomScalingFactor(),
    ];
    this.sampleChart.update();
  }

  getTotal(myChart) {
    const sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
    return `Total: ${sum}`;
  }

  randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
  };

  drawChart() {
    // StackBlitz is a "web worker" so a workaround is required to get this
    // to work for you here.  Normally you would use the @ViewChild above
    // with an access here that looks like this:
    //   const ctx = this.exampleCanvas.nativeElement.getContext('2d');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // Doughnut with multiple lines of text in the center
    this.sampleChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
              this.randomScalingFactor(),
            ],
            backgroundColor: this.DEFAULT_COLORS2,
            label: 'Dataset 1',
          },
        ],
        labels: ['Item one', 'Item two', 'Item three', 'Item four'],
      },
      options: {
        responsive: false,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        plugins: {
          title: {
            display: true,
            fullSize: true,
            text: 'Multiple Lines of Text',
            padding: {
              top: 20,
              bottom: 10,
            },
          },
          subtitle: {
            display: true,
            fullSize: true,
            text: '(With calculations!)',
            padding: {
              bottom: 20,
            },
          },
          legend: {
            display: true,
            position: 'top',
          },
          doughnutLabel: {
            labels: [
              {
                text: 'The Title',
                color: 'blue',
                font: {
                  size: 35,
                  family: 'Arial, Helvetica, sans-serif',
                  style: 'italic',
                  weight: 'bold',
                },
              },
              {
                text: 'The Subtitle',
                font: {
                  size: 25,
                },
                color: 'grey',
              },
              {
                text: '$100.00',
                font: {
                  size: 20,
                },
                color: 'red',
              },
              {
                text: this.getTotal,
                font: {
                  size: 20,
                },
                color: 'green',
              },
            ],
          },
        },
      },
    });
  }
}
