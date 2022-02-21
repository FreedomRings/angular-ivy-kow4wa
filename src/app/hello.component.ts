import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Chart.js Plugin Example</h1>
  <h2>chartjs-plugin-doughnutlabel-v3</h2>
  <h3>(Example in {{name}})</h3>`,
  styles: [
    `
    h1 { font-family: Lato; text-align: center; }
    h2 { font-family: Lato; text-align: center; color: blue }
    h3 { font-family: Lato; text-align: center; color: slategrey; }
    `,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
