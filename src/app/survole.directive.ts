import { Directive, ElementRef, HostListener, HostBinding, OnInit, } from '@angular/core';

@Directive({
  selector: '[appSurvole]'
})
export class SurvoleDirective implements OnInit {
  @HostBinding('class') myClass: string;
  constructor() {}

  ngOnInit() {

  }
  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myClass = 'firstMovie';
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myClass = '';
  }
}
