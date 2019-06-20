import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleSimpleTabbedComponent } from './example-simple-tabbed.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleSimpleTabbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ExampleSimpleTabbedRoutingModule { }
