import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'User Management App!';
  numberOfDev = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
