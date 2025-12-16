import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [


    {
        path : '',
        component : Counter

    },
    {
      path : 'hero',
      component : HeroPageComponent,
    },
    {
      path : '**',
      redirectTo : '',
    }
];
