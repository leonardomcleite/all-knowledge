import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'example-simple-full-width',
    loadChildren: () => import('./example-layouts/simple/example-simple-full-width/example-simple-full-width.module').then(m => m.ExampleSimpleFullWidthModule)
  },
  {
    path: 'example-simple-tabbed',
    loadChildren: () => import('./example-layouts/simple/example-simple-tabbed/example-simple-tabbed.module').then(m => m.ExampleSimpleTabbedModule)
  },
  {
    path: 'example-carded-full-width',
    loadChildren: () => import('./example-layouts/carded/example-carded-full-width/example-carded-full-width.module').then(m => m.ExampleCardedFullWidthModule)
  },
  {
    path: 'example-carded-tabbed',
    loadChildren: () => import('./example-layouts/carded/example-carded-tabbed/example-carded-tabbed.module').then(m => m.ExampleCardedTabbedModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
