import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutsideDirective]',
  standalone: true
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();
  private closeCounter: number = 0;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event):void {

      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside && this.closeCounter > 0) {
        this.clickOutside.emit();
      }
      this.closeCounter++
    }
}
