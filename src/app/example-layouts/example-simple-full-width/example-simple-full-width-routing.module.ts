import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleSimpleFullWidthComponent } from './example-simple-full-width.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleSimpleFullWidthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleSimpleFullWidthRoutingModule { }
