import { Injectable, NgModuleFactoryLoader, NgModuleFactory, ComponentFactoryResolver, Type, Injector } from '@angular/core';

import * as AngularCommon from '@angular/common';
import * as AngularCore from '@angular/core';

declare var SystemJS;

@Injectable()
export class FactoryService {

  constructor(
    private loader: NgModuleFactoryLoader,
    private resolver: ComponentFactoryResolver,
    private _injector: Injector
  ) { }

  async getModule(module: any): Promise<NgModuleFactory<any>> {
    if (!module) {
      return undefined;
    } else {

      // now, import the new module
      return await import(module.path);
    }
  }

  getComponent(component: string, factoryModule?: NgModuleFactory<any>) {
    const func = (resolver: ComponentFactoryResolver, cpName: string) => {
      // encotranta component pelo seletor
      const factoriesComponent = Array.from(resolver['_factories'].keys());
      const factoryComponent = <Type<any>>factoriesComponent.find((x: any) => {
        const componentValues = resolver['_factories'].get(x);
        return componentValues.selector === component;
      });

      if (!factoryComponent) {
        console.error(`Component Factory Not Fount - ${component}`);
      }
      return factoryComponent;
    };

    if (!factoryModule) { // modulo raiz
      return func(this.resolver, component);

    } else { // modulo lazy
      const createdModule = factoryModule.create(this._injector);
      const r = createdModule.componentFactoryResolver;
      return func(r, component);
    }
  }
}
