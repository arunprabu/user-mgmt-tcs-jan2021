import { Component } from '@angular/core';

// Decorator 
// Unifies html, css, ts of the comp
@Component({
  selector: 'app-root', // exposes the comp in element selector -- mandatory
  templateUrl: './app.component.html', // html -- template -- is mandatory -- should be only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'user-mgmt-tcs-jan2021';
}
