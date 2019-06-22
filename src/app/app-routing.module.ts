import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'ak-example-simple-tabbed',
    loadChildren: () => import('./pages/example-simple-tabbed/example-simple-tabbed.module').then(m => m.ExampleSimpleTabbedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
