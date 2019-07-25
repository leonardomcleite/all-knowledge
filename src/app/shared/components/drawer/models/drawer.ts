import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

export  class DrawerModel {
  status: number = 0;
  direction: string = 'up';
  showOverlay: boolean = true;
  componentFactory: any;
  component: Type<any>;
  title: string;
  inputs?: any;
  outputs?: any;
  size?: string;
  module: any;
  componentFactoryResolver: ComponentFactoryResolver;

  constructor(component: Type<any>, componentFactoryResolver: ComponentFactoryResolver, module?: any, title?: string, size?: string, inputs?: any, outputs?: any) {
    this.component = component;
    this.componentFactoryResolver = componentFactoryResolver;
    this.module = module;
    this.title = title;
    this.inputs = inputs;
    this.outputs = outputs;
    this.size = size;
  }
}
