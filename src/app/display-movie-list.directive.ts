import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayMovieList]'
})
export class DisplayMovieListDirective {
  @Input() set appDisplayMovieList(showMovies: boolean) {
    if (showMovies) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

}
