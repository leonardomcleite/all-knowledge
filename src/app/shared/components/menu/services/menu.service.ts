import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { MenuAccess } from '@all-knowledge/core/models/menu-access.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() {
    return of([
      new MenuAccess('menu.layouts', null, 'view_quilt', false, false, false, [
        new MenuAccess('menu.simple', null, null, false, false, true, [
          new MenuAccess('submenu.fullWidth', 'example-simple-full-width', null, false, false),
          new MenuAccess('submenu.tabbed', 'example-simple-tabbed', null, false, false)
        ]),
        new MenuAccess('menu.carded', null, null, false, false, true, [
          new MenuAccess('submenu.fullWidth', 'example-carded-full-width', null, false, false),
          new MenuAccess('submenu.tabbed', 'example-carded-tabbed', null, false, false, false)
        ]),
      ]),
      new MenuAccess('menu.sobre', 'sobre', 'import_contacts', false, false, false, null),
    ]);
  }
}
