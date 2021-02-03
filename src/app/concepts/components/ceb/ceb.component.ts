import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create an object for EventEmitter Class
  @Output() profileLoaded = new EventEmitter(); // Step 2: @Output() - to make custom Event to the selector 'app-ceb' 

  constructor() { }

  ngOnInit(): void {
  }

  sendDataHandler(){
    console.log('Will send');
    // Step 3: Let's trigger /emit the event thru program
    this.profileLoaded.emit('Arun'); // Step 4: Sending the data with the emitted event
    // Step 4 of CEB is in concepts.comp.html 
  }

}
