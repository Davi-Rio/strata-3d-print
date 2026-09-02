import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  provideRouter,
} from '@angular/router';

import {
  Header,
} from './header';

describe('Header', () => {

  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Header,
      ],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the mobile menu', () => {
    expect(component.isMenuOpen()).toBe(false);

    component.toggleMenu();

    expect(component.isMenuOpen()).toBe(true);
  });

  it('should close the mobile menu', () => {
    component.toggleMenu();
    component.closeMenu();

    expect(component.isMenuOpen()).toBe(false);
  });

});