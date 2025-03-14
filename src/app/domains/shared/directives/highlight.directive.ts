import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  element = inject(ElementRef)

  constructor() { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "red"
  }

}
