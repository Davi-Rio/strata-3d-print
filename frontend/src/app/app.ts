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

@Component({
  selector: 'strata-root',
  imports: [
    Header,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}