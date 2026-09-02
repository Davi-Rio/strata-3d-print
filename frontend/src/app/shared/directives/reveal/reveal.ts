import {
  isPlatformBrowser,
} from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  RendererStyleFlags2,
} from '@angular/core';

@Directive({
  selector: '[strataReveal]',
})
export class Reveal implements AfterViewInit, OnDestroy {

  readonly delay = input(0, {
    alias: 'strataRevealDelay',
    transform: numberAttribute,
  });

  readonly distance = input(32, {
    alias: 'strataRevealDistance',
    transform: numberAttribute,
  });

  private readonly elementRef =
    inject<ElementRef<HTMLElement>>(ElementRef);

  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'strata-reveal');

    this.renderer.setStyle(
      element,
      '--strata-reveal-delay',
      `${this.delay()}ms`,
      RendererStyleFlags2.DashCase,
    );

    this.renderer.setStyle(
      element,
      '--strata-reveal-distance',
      `${this.distance()}px`,
      RendererStyleFlags2.DashCase,
    );

    if (!('IntersectionObserver' in globalThis)) {
      this.showElement();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        this.showElement();
        this.observer?.disconnect();
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private showElement(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'strata-reveal--visible',
    );
  }

}