import {
  TestBed,
} from '@angular/core/testing';
import {
  provideRouter,
} from '@angular/router';

import {
  App,
} from './app';

describe('App', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
      ],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();
  });

  it('should create the application', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render the application structure', () => {
    const fixture = TestBed.createComponent(App);

    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('strata-header')).toBeTruthy();
    expect(element.querySelector('main')).toBeTruthy();
    expect(element.querySelector('router-outlet')).toBeTruthy();
  });

});