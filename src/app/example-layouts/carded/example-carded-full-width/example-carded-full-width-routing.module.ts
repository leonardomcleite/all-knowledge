import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleCardedFullWidthComponent } from './example-carded-full-width.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleCardedFullWidthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleCardedFullWidthRoutingModule { }
