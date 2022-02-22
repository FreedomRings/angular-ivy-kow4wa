import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Chart.js Angular Plugin Example</h1>
  <h2>(Example in {{name}})</h2>`,
  styles: [
    `
    h1 { font-family: Lato; text-align: center; }
    h2 { font-family: Lato; text-align: center; color: blue }
    `,
  ],
})
export class HelloComponent {
  @Input() name: string;
}
