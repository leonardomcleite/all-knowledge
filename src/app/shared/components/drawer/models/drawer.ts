export  class DrawerModel {
  status: number;
  direction: string;
  showOverlay: boolean;
  component: any;
  module: any;
  title: string;
  inputs?: any;
  outputs?: any;
  size?: string;
  icons?: DrawerIconModel[];

  constructor(status: number, direction: string, showOverlay: boolean, component: any, module: any, title: string, inputs?: any, outputs?: any, size?: string, icons?: DrawerIconModel[]) {
    this.status = status;
    this.direction = direction;
    this.showOverlay = showOverlay;
    this.component = component;
    this.module = module;
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