import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { Reveal } from '../../../../shared/directives/reveal/reveal';

@Component({
  selector: 'strata-about',
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {}