import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // mandatory
  // inline template
  template: `
    <div class='text-center'>
      <hr>
      <app-menu></app-menu>
      <p class='greenText'>Copyright 2021 | Arun</p>
    </div>
  `,
  // inline styles
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
