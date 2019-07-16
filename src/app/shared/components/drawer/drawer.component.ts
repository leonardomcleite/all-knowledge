import { FactoryService } from '@all-knowledge/core/services/factory/factory.service';
import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, NgModuleFactory, NgModuleRef, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DrawerService } from './drawer.service';
import { DrawerIconModel, DrawerModel } from './models/drawer';

@Component({
  selector: 'ak-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {

  @ViewChild('drawerContent', { read: ViewContainerRef, static: true }) content: ViewContainerRef;

  @Input() drawer: DrawerModel;

  component: Type<any>;
  module: NgModuleFactory<any>;
  componentResolved: ComponentFactory<any>;
  componentRef: ComponentRef<any>;
  titleTemplate: ComponentRef<any>;
  drawerTitleContentTemplate: ComponentRef<any>;
  subscription: Array<Subscription> = new Array<Subscription>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private factory: FactoryService,
    private drawerService: DrawerService,
  ) {}


  ngOnInit() {
    this.createDynamicComponent();
  }

  async ngOnDestroy() {
    if (this.subscription.length > 0) {
      this.subscription.forEach(subs => {
        subs.unsubscribe();
      });
    }
    this.componentRef.destroy();
  }

  createDynamicComponent() {
    let factory;
    this.content.clear();
    if (this.drawer.module) {
      this.factory.getModule(this.drawer.module).then(module => {
        this.module = module;
        this.component = this.factory.getComponent(this.drawer.component, this.module);
        const moduleRef: NgModuleRef<any> = this.module.create(this.content.injector);
        factory = moduleRef.componentFactoryResolver.resolveComponentFactory(this.component);
      });
    } else {
      this.component = this.factory.getComponent(this.drawer.component, this.module);
      factory = this.componentFactoryResolver.resolveComponentFactory(this.component);
    }
    this.componentRef = this.content.createComponent(factory);
    this.bindInputsAndOutputs();
    this.componentRef.changeDetectorRef.detectChanges();
    this.getDrawerTitle();
    this.getDrawerTitleButtons();
  }

  bindInputsAndOutputs() {
    this.drawer.inputs = { ...this.drawer.inputs, tipoComponent: 'drawer' };
    Object.assign(this.componentRef.instance, this.drawer.inputs);

    for (const key in this.componentRef.instance) {
      if (this.drawer.outputs && this.drawer.outputs[key]) {
        const property = this.componentRef.instance[key];
        if (property && property instanceof EventEmitter) {
          this.subscription.push(property.subscribe(this.drawer.outputs[key]));
        }
      }
    }
  }

  getDrawerTitle() {
    const component = this.componentRef.instance;
    if (component.pageTemplates) {
      const page: any = Array.from(component.pageTemplates)[0];
      if (page) {
        this.titleTemplate = page.titleTemplate;
      }
    }
  }

  getDrawerTitleButtons() {
    const component = this.componentRef.instance;
    if (component.drawerTitleContentTemplate) {
      this.drawerTitleContentTemplate = component.drawerTitleContentTemplate;
    }
  }

  close() {
    this.drawerService.close();
  }

  onIconClick(icon: DrawerIconModel) {
    icon.callback();
  }

  getStyles() {
    return this.getAnimatedStyle().concat(this.getMultiStageStyle('DRAWER'));
  }

  getCardStyles() {
    return this.getMultiStageStyle('CARD');
  }

  getOverlayStyles() {
    return this.getMultiStageStyle('OVERLAY');
  }

  getMultiStageStyle(component: string) {
    const multiStgExist = false;
    if (component === 'DRAWER') {
      return multiStgExist ? ' --drawer-top-multistage' : ' --drawer-top-basic';
    } else if (component === 'OVERLAY') {
      return multiStgExist ? ' --drawer-overlay-top-multistage' : ' --drawer-overlay-top-basic';
    } else if (component === 'CARD') {
      return multiStgExist ? ' --drawer-height-multistage' : ' --drawer-height-basic';
    }
  }

  getAnimatedStyle(): string {
    if (this.drawer.direction === 'up') {
      if (this.drawer.status === 0) {
        return 'drawer--close';
      } else if (this.drawer.status === 1) {
        return 'drawer--open-1';
      } else if (this.drawer.status === 2) {
        return 'drawer--open-2';
      } else {
        return 'drawer--open-3';
      }
    } else if (this.drawer.direction === 'down') {
      if (this.drawer.status === 0) {
        return 'drawer--close-down';
      } else if (this.drawer.status === 1) {
        return 'drawer--open-1-down';
      } else if (this.drawer.status === 2) {
        return 'drawer--open-2-down';
      } else {
        return 'drawer--open-3-down';
      }
    }
  }

}
