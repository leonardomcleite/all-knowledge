import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { MenuModel } from '@all-knowledge/core/models/menu-access.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() {
    return of([
      new MenuModel('menu.layouts', null, 'view_quilt', false, false, false, [
        new MenuModel('menu.simple', null, null, false, false, true, [
          new MenuModel('submenu.fullWidth', 'example-simple-full-width', null, false, false),
          new MenuModel('submenu.tabbed', 'example-simple-tabbed', null, false, false)
        ]),
        new MenuModel('menu.carded', null, null, false, false, true, [
          new MenuModel('submenu.fullWidth', 'example-carded-full-width', null, false, false),
          new MenuModel('submenu.tabbed', 'example-carded-tabbed', null, false, false, false)
        ]),
      ]),
      new MenuModel('menu.sobre', 'sobre', 'import_contacts', false, false, false, null),
    ]);
  }
}
