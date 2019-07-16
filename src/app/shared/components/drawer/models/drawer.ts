import { ComponentFactory, ComponentRef } from '@angular/core';

export  class DrawerModel {
  status: number;
  direction: string;
  showOverlay: boolean;
  componentFactory: ComponentFactory<any>;
  title: string;
  inputs?: object;
  outputs?: object;
  size?: string;
  icons?: DrawerIconModel[];

  constructor(componentFactory: ComponentFactory<any>, status: number, direction: string, showOverlay: boolean, title: string, inputs?: any, outputs?: any, size?: string, icons?: DrawerIconModel[]) {
    this.componentFactory = componentFactory;
    this.status = status;
    this.direction = direction;
    this.showOverlay = showOverlay;
    this.title = title;
    this.inputs = inputs;
    this.outputs = outputs;
    this.size = size;
    this.icons = icons;
  }
}

export class DrawerIconModel {
  nome: string;
  disabled?: boolean;
  icone?: string;
  callback: Function;
}