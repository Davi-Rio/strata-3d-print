import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { FeaturedProducts } from '../../components/featured-products/featured-products';
import { Reveal } from '../../../../shared/directives/reveal/reveal';
import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'strata-home',
  imports: [
    Reveal,
    FeaturedProducts,
    HowItWorks,
    About,
    Contact,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}