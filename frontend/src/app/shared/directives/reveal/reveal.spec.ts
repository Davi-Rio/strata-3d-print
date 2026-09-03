import {
  Component,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  By,
} from '@angular/platform-browser';

import {
  Reveal,
} from './reveal';

@Component({
  imports: [
    Reveal,
  ],
  template: `
    <div
      strataReveal
      [strataRevealDelay]="120"
      [strataRevealDistance]="36"
    ></div>
  `,
})
class TestHost {}

describe('Reveal', () => {

  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHost,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should create the directive', () => {
    const debugElement = fixture.debugElement.query(
      By.directive(Reveal),
    );

    expect(debugElement.injector.get(Reveal)).toBeTruthy();
  });

  it('should configure animation properties', () => {
    const element = fixture.debugElement.query(
      By.directive(Reveal),
    ).nativeElement as HTMLElement;

    expect(
      element.style.getPropertyValue('--strata-reveal-delay'),
    ).toBe('120ms');

    expect(
      element.style.getPropertyValue('--strata-reveal-distance'),
    ).toBe('36px');
  });

});