import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'example-simple-full-width',
    loadChildren: () => import('./example-layouts/example-simple-full-width/example-simple-full-width.module').then(m => m.ExampleSimpleFullWidthModule)
  },
  {
    path: 'example-simple-tabbed',
    loadChildren: () => import('./example-layouts/example-simple-tabbed/example-simple-tabbed.module').then(m => m.ExampleSimpleTabbedModule)
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
