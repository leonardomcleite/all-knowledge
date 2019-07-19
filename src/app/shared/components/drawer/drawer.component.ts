import { Component, ComponentRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DrawerService } from './drawer.service';
import { DrawerModel } from './models/drawer';

@Component({
  selector: 'ak-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['drawer.component.scss']
})
export class DrawerComponent implements OnInit, OnDestroy {

  @ViewChild('content', { read: ViewContainerRef, static: true }) content: ViewContainerRef;

  @Input() drawer: DrawerModel;

  public componentRef: ComponentRef<any>;
  public subscription: Array<Subscription> = new Array<Subscription>();

  constructor(
    private drawerService: DrawerService,
  ) {}

  ngOnInit() {
    this.loadComponent();
  }


  async ngOnDestroy() {
    if (this.subscription.length > 0) {
      this.subscription.forEach(subs => {
        subs.unsubscribe();
      });
    }
    this.componentRef.destroy();
  }

  /**
   * Renderiza o component na drawer
   */
  loadComponent() {
    this.content.clear();
    this.componentRef = this.content.createComponent(this.drawer.componentFactory);
    this.bindInputsAndOutputs();
  }

  /**
   * Seta todos os @Input's e @Output's
   */
  bindInputsAndOutputs() {
    // Set Inputs
    Object.assign(this.componentRef.instance, this.drawer.inputs);

    // Set Outputs
    for (const key in this.componentRef.instance) {
      if (this.drawer.outputs && this.drawer.outputs[key]) {
        const propriety = this.componentRef.instance[key];

        if (propriety && propriety instanceof EventEmitter) {
          propriety.subscribe(this.drawer.outputs[key]);
        }
      }
    }
  }

  close() {
    this.drawerService.close();
  }

  getStyles() {
    return this.getAnimatedStyle().concat(' --drawer-top-basic');
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
