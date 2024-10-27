import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCapacity]'
})
export class HighlightDirective {
  @Input() appHighlightCapacity: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.appHighlightCapacity > 500) {
      this.renderer.addClass(this.el.nativeElement, 'highlighted');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'highlighted');
    }
  }
}