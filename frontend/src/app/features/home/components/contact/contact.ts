import {
  ChangeDetectionStrategy,
  Component,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

import { Reveal } from '../../../../shared/directives/reveal/reveal';

@Component({
  selector: 'strata-contact',
  imports: [
    ReactiveFormsModule,
    Reveal,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);

  readonly whatsappNumber = '5581998594877';
  readonly whatsappDisplay = '(81) 99859-4877';
  readonly email = 'strata.3dprint@gmail.com';
  readonly instagramUrl = 'https://www.instagram.com/strata.3dprint/';

  readonly projectTypes = [
    'Produto personalizado',
    'Peça funcional',
    'Miniatura ou colecionável',
    'Decoração',
    'Brinquedo articulado',
    'Impressão de arquivo 3D',
    'Outro projeto',
  ] as const;

  readonly quoteForm = this.formBuilder.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.maxLength(80),
        Validators.pattern(/\S/),
      ],
    ],
    projectType: ['', Validators.required],
    quantity: [
      1,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(999),
      ],
    ],
    details: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(600),
        Validators.pattern(/\S/),
      ],
    ],
  });

  sendToWhatsApp(): void {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    const formValue = this.quoteForm.getRawValue();

    const message = [
      'Olá, STRATA 3D PRINT!',
      '',
      `Meu nome é ${formValue.name.trim()}.`,
      `Tipo de projeto: ${formValue.projectType}.`,
      `Quantidade estimada: ${formValue.quantity}.`,
      '',
      'Detalhes do projeto:',
      formValue.details.trim(),
      '',
      'Gostaria de receber uma estimativa de orçamento.',
    ].join('\n');

    const whatsappUrl =
      `https://wa.me/${this.whatsappNumber}` +
      `?text=${encodeURIComponent(message)}`;

    if (isPlatformBrowser(this.platformId)) {
      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer',
      );
    }
  }
}