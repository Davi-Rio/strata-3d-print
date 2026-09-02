import {
  Routes,
} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'STRATA 3D PRINT | Impressão 3D personalizada',
    loadComponent: () =>
      import('./features/home/pages/home/home')
        .then((component) => component.Home),
  },
  {
    path: '**',
    redirectTo: '',
  },
];