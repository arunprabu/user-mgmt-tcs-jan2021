import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  dummyText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';

  today: Date = new Date();

  sampleText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit!';

  constructor() { }

  ngOnInit(): void {
  }

}
