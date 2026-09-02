import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { Reveal } from '../../../../shared/directives/reveal/reveal';

@Component({
  selector: 'strata-home',
  imports: [
    Reveal,
    FeaturedProducts,
    HowItWorks,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}