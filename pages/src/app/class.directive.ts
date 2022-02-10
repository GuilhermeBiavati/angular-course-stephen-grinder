import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // @Input() backgroundColor: string = '';

  constructor(private element: ElementRef) {
  }

  // ngOnInit(): void {
  //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  // }

  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}
