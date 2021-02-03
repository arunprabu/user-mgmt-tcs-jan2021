import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Have a variable with data
  @Input() age = 10;  // Step 2: @Input() will make the variable as custom property to the selector app-cpb


  constructor() { }

  ngOnInit(): void {
  }

}
