import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) {  // Dependency Injection
    console.log(this.elRef.nativeElement );

    let el = this.elRef.nativeElement;
    
    // change the styles using js 
    // el.style.backgroundColor = 'red';
    // el.style.color = 'white';
    // el.style.height = '200px';

    // let's change the styles using renderer
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', 'white');
    this.renderer.setStyle(el, 'height', '200px');
  }

  @HostListener('click', ['$event.target'])
  onClickHandler(el) {
    console.log(el);
    this.renderer.setStyle(el, 'background-color', 'yellow');
    this.renderer.setStyle(el, 'color', 'black');
  }
  
  @HostListener('mouseout', ['$event.target'])
  onMouseoutHandler(el){
    this.renderer.setStyle(el, 'background-color', 'green');
    this.renderer.setStyle(el, 'color', 'white');
  }

  @HostListener('mouseover', ['$event.target'])
  onMouseoverHandler(el){
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', 'white');
  }

  // Todo: Try @HostBinding()

  
}
