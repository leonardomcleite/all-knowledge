import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { DrawerService } from '@all-knowledge/shared/components/drawer/drawer.service';
import { ExampleDrawerComponent } from './example-drawer/example-drawer.component';

@Component({
  selector: 'ak-example-simple-full-width',
  templateUrl: './example-simple-full-width.component.html',
  styleUrls: ['./example-simple-full-width.component.scss']
})
export class ExampleSimpleFullWidthComponent implements OnInit {

  constructor(
    private drawerService: DrawerService,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnInit() {}

  openDrawer() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleDrawerComponent);
    this.drawerService.open(componentFactory, {title: 'Teste3'}, null, 'Example Drawer', 'lg');
  }

}
