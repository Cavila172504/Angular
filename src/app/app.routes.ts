import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball';
<<<<<<< HEAD
import { DragonballPagesuperComponent } from './pages/dragonball-super/dragonball';
=======
>>>>>>> origin/main

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
<<<<<<< HEAD
      path : 'dragonball-super',
      component : DragonballPagesuperComponent, 
    },
    {
=======
>>>>>>> origin/main
      path : '**',
      redirectTo : '',
    }
];
