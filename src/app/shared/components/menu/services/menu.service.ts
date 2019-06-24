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
      new MenuAccess('menu.layoutsSimple', null, 'view_quilt', false, false, [
        new MenuAccess('submenu.simpleFullWidth', 'example-simple-full-width', null, false, false),
        new MenuAccess('submenu.simpleTabbed', 'example-simple-tabbed', null, false, false)
      ]),
      new MenuAccess('menu.layoutsCarded', null, 'view_quilt', false, false, [
        new MenuAccess('submenu.cardedFullWidth', 'example-carded-full-width', null, false, false),
        new MenuAccess('submenu.cardedTabbed', 'example-carded-tabbed', null, false, false)
      ]),
      new MenuAccess('menu.sobre', 'sobre', 'import_contacts', false, false, null),
    ]);
  }
}
