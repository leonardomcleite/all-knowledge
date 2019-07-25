import { Injectable, ComponentFactory, ComponentRef, ComponentFactoryResolver, Type } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { DrawerModel } from './models/drawer';
import { Observable } from 'rxjs/internal/Observable';

interface Drawer {
  value: DrawerModel;
  onDestroySubject: Subject<any>;
}

export class DrawerMapModel {
  drawers: Drawer[];
  subject: Subject<Drawer[]>;
}

@Injectable()
export class DrawerService {

  private drawerMap = new Map<string, DrawerMapModel>();
  private delayAnimation: number = 500;

  constructor(
    private resolver: ComponentFactoryResolver,
  ) {
    this.initDrawerMap();
  }

  private initDrawerMap() {
    this.drawerMap.set('drawers', { drawers: [], subject: new Subject() });
  }

  /**
   * Cria uma drawer
   * @param component - Type component: ExampleDrawerComponent
   * @param inputs - @Input(): {input1: value, input2: value}
   * @param outputs - @Output(): {input1: (_: any) => this.executaAlgumMetodo(_)}
   * @param title - Titulo da drawer
   * @param size - Tamanho: sm, md, lg
   * @param icons - Icones
   */
  public open(component: any, module?: any, title?: string, size?: string, inputs?: any, outputs?: any): Observable<any> {
    const onDestroySubject = new Subject<any>();
    const drawer: DrawerModel = new DrawerModel(component, this.resolver, module, title, size ? size : 'lg', inputs, outputs);
    const drawers = this.getDrawers();
    drawers.push({ value: drawer, onDestroySubject });
    drawers.forEach(element => {
      element.value.direction = 'up';
      element.value.status++;
    });

    this.getDrawerSubject().next(drawers);
    return onDestroySubject.asObservable();
  }

  /**
   * Fecha todas a drawers
   */
  public closeAll() {
    const drawers = this.getDrawers();
    drawers.forEach(drawer => {
      drawer.value.direction = 'down';
      drawer.value.status--;
      if (drawers.indexOf(drawer) === drawers.length - 1) {
        drawer.value.showOverlay = false;
      }
    });

    setTimeout(() => {
      const length = drawers.length;
      for (let index = 0; index < length; index++) {
        const drawer = drawers.pop();
        drawer.onDestroySubject.complete();
        this.getDrawerSubject().next(drawers);
      }
    }, this.delayAnimation);

  }

  /**
   * Fecha a drawer
   * @param returnDrawer - Objeto de retorno quando fecha a drawer
   */
  public close(returnDrawer?: any) {
    const drawers = this.getDrawers();
    drawers.forEach(element => {
      element.value.direction = 'down';
      element.value.status--;
      if (drawers.indexOf(element) === drawers.length - 1) {
        element.value.showOverlay = false;
      }
    });

    setTimeout(() => {
      const drawer = drawers.pop();
      drawer.onDestroySubject.next(returnDrawer);
      drawer.onDestroySubject.complete();
      this.getDrawerSubject().next(drawers);
    }, this.delayAnimation);
  }

  public getDrawers() {
    return this.drawerMap.get('drawers') ? this.drawerMap.get('drawers').drawers : [];
  }

  public getDrawerSubject(): Subject<Drawer[]> {
    return this.drawerMap.get('drawers') ? this.drawerMap.get('drawers').subject : null;
  }

  public getDrawerObservables(): Observable<DrawerModel[]> {
    const subject = this.getDrawerSubject();
    return subject ? subject.pipe(map(drawers => drawers.map(drawer => drawer.value))) : null;
  }

  public isDrawerOpen(): boolean {
    return Boolean(this.getDrawers().length);
  }

}
