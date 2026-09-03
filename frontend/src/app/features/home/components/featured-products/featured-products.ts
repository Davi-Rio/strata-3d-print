import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

import { Reveal } from '../../../../shared/directives/reveal/reveal';

type ProductCategory =
  | 'Todos'
  | 'Utilidades'
  | 'Articulados'
  | 'Miniaturas'
  | 'Decoração'
  | 'Colecionáveis';

interface FeaturedProduct {
  readonly id: string;
  readonly name: string;
  readonly category: Exclude<ProductCategory, 'Todos'>;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly price: number;
  readonly pricePrefix: 'Estimativa' | 'A partir de';
  readonly badge?: string;
}

@Component({
  selector: 'strata-featured-products',
  imports: [Reveal],
  templateUrl: './featured-products.html',
  styleUrl: './featured-products.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedProducts {
  readonly categories: readonly ProductCategory[] = [
    'Todos',
    'Utilidades',
    'Articulados',
    'Miniaturas',
    'Decoração',
    'Colecionáveis',
  ];

  readonly selectedCategory = signal<ProductCategory>('Todos');

  readonly products: readonly FeaturedProduct[] = [
    {
      id: 'sardinhas-interativas',
      name: 'Sardinhas interativas',
      category: 'Utilidades',
      description:
        'Conjunto criativo com peças removíveis e combinações de cores personalizadas.',
      image: '/images/products/sardinhas-interativas.webp',
      imageAlt:
        'Três conjuntos de sardinhas interativas produzidos em impressão 3D',
      price: 39.9,
      pricePrefix: 'Estimativa',
      badge: 'Criativo',
    },
    {
      id: 'dinossauro-articulado',
      name: 'Dinossauro articulado',
      category: 'Articulados',
      description:
        'Modelo articulado com movimento livre e acabamento em filamento mesclado.',
      image: '/images/products/dinossauro-articulado.webp',
      imageAlt: 'Dinossauro articulado produzido em impressão 3D',
      price: 39.9,
      pricePrefix: 'A partir de',
      badge: 'Articulado',
    },
    {
      id: 'espada-fantasia',
      name: 'Espada decorativa de fantasia',
      category: 'Decoração',
      description:
        'Peça decorativa de grande impacto visual, produzida sob encomenda.',
      image: '/images/products/espada-fantasia.webp',
      imageAlt: 'Espada decorativa de fantasia impressa em 3D',
      price: 149.9,
      pricePrefix: 'A partir de',
      badge: 'Sob encomenda',
    },
    {
      id: 'miniaturas-rpg',
      name: 'Kit de miniaturas para RPG',
      category: 'Miniaturas',
      description:
        'Conjunto com sete personagens detalhados para aventuras e jogos de mesa.',
      image: '/images/products/miniaturas-rpg.webp',
      imageAlt: 'Conjunto com sete miniaturas de personagens para RPG',
      price: 109.9,
      pricePrefix: 'Estimativa',
      badge: 'Kit com 7',
    },
    {
      id: 'capivara-mini',
      name: 'Mini capivara',
      category: 'Miniaturas',
      description:
        'Miniatura compacta e delicada, ideal para decoração ou presente.',
      image: '/images/products/capivara-mini.webp',
      imageAlt: 'Miniatura marrom de capivara produzida em impressão 3D',
      price: 14.9,
      pricePrefix: 'Estimativa',
    },
    {
      id: 'guerreiro-fantastico',
      name: 'Guerreiro fantástico',
      category: 'Colecionáveis',
      description:
        'Figura colecionável com base expositora e alto nível de detalhes.',
      image: '/images/products/guerreiro-fantastico.webp',
      imageAlt:
        'Figura branca de guerreiro fantástico com base expositora preta',
      price: 89.9,
      pricePrefix: 'A partir de',
      badge: 'Colecionável',
    },
  ];

  readonly visibleProducts = computed(() => {
    const category = this.selectedCategory();

    if (category === 'Todos') {
      return this.products;
    }

    return this.products.filter(
      (product) => product.category === category,
    );
  });

  private readonly currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  selectCategory(category: ProductCategory): void {
    this.selectedCategory.set(category);
  }

  formatPrice(price: number): string {
    return this.currencyFormatter.format(price);
  }
}