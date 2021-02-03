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

  // Property Binding related
  courseName = 'Angular';

  //two way binding
  companyLocation = 'Chennai';

  dataReceivedFromChildComp = '';

  // *ngIf related
  isLoggedIn = true;

  // *ngFor related
  skillList: string[] = [
    'html', 'css', 'ts', 'ng'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //event binding related
  clickMeHandler(event: any){
    console.log(event);
    // todo: Change the button label to be 'Clicked' and disable the button also.
  }

  // Step 6 of CEB: receive the data from the emitted custom event
  profileLoadedHandler(event: any){
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }

}
