import { Injectable, NgModuleFactoryLoader, ComponentFactoryResolver, Injector, NgModuleFactory, Type } from '@angular/core';

@Injectable()
export class FactoryService {

  constructor(
    private loader: NgModuleFactoryLoader,
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  getModule(module: string): Promise<NgModuleFactory<any>> {
    if (!module) {
      return undefined;
    } else {
      return this.loader.load(module);
    }
  }

  getComponent(component: string, factoryModule?: NgModuleFactory<any>) {
    const func = (resolver: ComponentFactoryResolver, cpName: string) => {
      // encotranta component pelo seletor
      const factoriesComponent = Array.from(resolver['_factories'].keys());
      const factoryComponent = factoriesComponent.find((x: any) => {
        const componentValues = resolver['_factories'].get(x);
        return componentValues.selector === component;
      }) as Type<any>;

      if (!factoryComponent) {
        console.error(`Component Factory Not Fount - ${component}`);
      }
      return factoryComponent;
    };

    if (!factoryModule) { // modulo raiz
      return func(this.resolver, component);

    } else { // modulo lazy
      const createdModule = factoryModule.create(this.injector);
      const r = createdModule.componentFactoryResolver;
      return func(r, component);
    }
  }
}
