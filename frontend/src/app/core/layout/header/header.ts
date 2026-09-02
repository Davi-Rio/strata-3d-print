import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import {
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'strata-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {

  readonly isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

}