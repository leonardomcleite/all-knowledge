import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'example-simple-full-width',
    loadChildren: () => import('./pages/example-simple-full-width/example-simple-full-width.module').then(m => m.ExampleSimpleFullWidthModule)
  },
  {
    path: 'example-simple-tabbed',
    loadChildren: () => import('./pages/example-simple-tabbed/example-simple-tabbed.module').then(m => m.ExampleSimpleTabbedModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then(m => m.SobreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
