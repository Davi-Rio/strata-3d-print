import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  Reveal,
} from '../../../../shared/directives/reveal/reveal';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'strata-how-it-works',
  imports: [
    Reveal,
  ],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks {

  readonly steps: readonly ProcessStep[] = [
    {
      number: '01',
      title: 'Envie sua ideia',
      description:
        'Conte o que você deseja criar e compartilhe referências, medidas ou o arquivo 3D.',
    },
    {
      number: '02',
      title: 'Validamos o projeto',
      description:
        'Analisamos o modelo, os materiais, o acabamento e a melhor forma de produção.',
    },
    {
      number: '03',
      title: 'Produzimos a peça',
      description:
        'Sua ideia ganha forma com acompanhamento, precisão e cuidado em cada camada.',
    },
    {
      number: '04',
      title: 'Você recebe',
      description:
        'Finalizamos, conferimos a qualidade e preparamos o produto para a entrega.',
    },
  ];

}