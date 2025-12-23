import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball';
import { DragonballPagesuperComponent } from './pages/dragonball-super/dragonball';

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
      path : 'dragonball',
      component : DragonballPageComponent,
    },
    {
      path : 'dragonball-super',
      component : DragonballPagesuperComponent,
    },
    {
      path : '**',
      redirectTo : '',
    }
];
