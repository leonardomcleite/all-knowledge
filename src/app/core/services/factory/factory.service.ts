import { Injectable, NgModuleFactoryLoader, NgModuleFactory, ComponentFactoryResolver, Type, Injector } from '@angular/core';

@Injectable()
export class FactoryService {

  constructor(
    private loader: NgModuleFactoryLoader,
    private resolver: ComponentFactoryResolver,
    private _injector: Injector
  ) { }

  getModule(module: any): any {
    if (!module) {
      return undefined;
    } else {
      return () => import('app/example-layouts/simple/example-simple-tabbed/example-simple-tabbed.module').then(m => {
        return m.ExampleSimpleTabbedModule;
      });
    }
  }

  getComponent(component: string, factoryModule?: ComponentFactoryResolver) {
    const func = (resolver: any, cpName: string) => {
      // encotra component pelo seletor
      const factoriesComponent = Array.from(resolver._factories.keys());
      const factoryComponent = factoriesComponent.find((x: any) => {
        const componentValues = resolver._factories.get(x);
        return componentValues.selector === component;
      }) as Type<any>;

      if (!factoryComponent) {
        console.error(`Component Factory Not Fount - ${component}`);
      }
      return factoryComponent;
    };

    return func(factoryModule, component);
    // if (factoryModule) { // modulo raiz
    // } else { // modulo lazy
    //   const createdModule = factoryModule.create(this._injector);
    //   const r = createdModule.componentFactoryResolver;
    //   return func(r, component);
    // }
  }
}
