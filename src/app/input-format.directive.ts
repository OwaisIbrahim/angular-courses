//inputformat.direcective.ts
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus() {
     console.log("onFocus");    
  }

  @HostListener('blur') onBlur() {
    console.log("onBlur");
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase(); 
    else
      this.el.nativeElement.value = value.toUpperCase(); 
 }
}