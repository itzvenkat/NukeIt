import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styles: [
  ]
})
export class SmsComponent implements OnInit {
  delay = 3;
  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number): number | string {
    if (value) return `${Number(value)}s`;
    return value;
  }

}
