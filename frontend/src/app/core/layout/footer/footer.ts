import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'strata-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly whatsappUrl =
    'https://wa.me/5581998594877' +
    '?text=Ol%C3%A1%2C%20STRATA%203D%20PRINT!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

  readonly instagramUrl =
    'https://www.instagram.com/strata.3dprint/';

  readonly emailUrl =
    'mailto:strata.3dprint@gmail.com';
}