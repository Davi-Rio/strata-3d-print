import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  RouterOutlet,
} from '@angular/router';

import {
  Header,
} from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
@Component({
  selector: 'strata-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}