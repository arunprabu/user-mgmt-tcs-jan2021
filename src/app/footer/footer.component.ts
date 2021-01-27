import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', //mandatory
  // inline template
  template: `
    <div class='text-center'>
      <hr>
      <p>Copyright 2021 | Arun</p>
    </div>
  `,
  // inline styles
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
