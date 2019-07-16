import { ComponentFactory } from '@angular/core';

export  class DrawerModel {
  status: number = 0;
  direction: string = 'up';
  showOverlay: boolean = true;
  componentFactory: ComponentFactory<any>;
  title: string;
  inputs?: object;
  outputs?: object;
  size?: string;

  constructor(componentFactory: ComponentFactory<any>, title: string, inputs?: any, outputs?: any, size?: string) {
    this.componentFactory = componentFactory;
    this.title = title;
    this.inputs = inputs;
    this.outputs = outputs;
    this.size = size;
  }
}
