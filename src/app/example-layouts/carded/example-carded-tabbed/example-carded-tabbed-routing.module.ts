import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleCardedTabbedComponent } from './example-carded-tabbed.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleCardedTabbedComponent
  },
  {
    path: ':tab',
    component: ExampleCardedTabbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleCardedTabbedRoutingModule { }
