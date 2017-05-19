import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: "[renderBackgroundImage]"
})

export class RenderBackgroundImageDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    renderer.setElementStyle(el.nativeElement, 'backgroundImage', `url(https://unsplash.it/1680/910?random=${ Date.now() })`);
  }
}
