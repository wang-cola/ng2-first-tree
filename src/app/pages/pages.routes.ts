import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'examples',
    loadChildren: './examples/examples.module#ExamplesModule',
  },
];