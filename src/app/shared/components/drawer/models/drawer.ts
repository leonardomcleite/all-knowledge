import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

export  class DrawerModel {
  status: number = 0;
  direction: string = 'up';
  showOverlay: boolean = true;
  title: string;
  inputs?: any;
  outputs?: any;
  size?: string;
  component: Type<any>;
  componentFactoryResolver: ComponentFactoryResolver;

  constructor(component: any, componentFactoryResolver: ComponentFactoryResolver, title?: string, size?: string, inputs?: any, outputs?: any) {
    this.component = component;
    this.componentFactoryResolver = componentFactoryResolver;
    this.title = title;
    this.inputs = inputs;
    this.outputs = outputs;
    this.size = size;
  }
}
