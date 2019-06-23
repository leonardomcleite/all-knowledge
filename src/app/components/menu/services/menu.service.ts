import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { MenuAccess } from 'src/app/core/models/menu-access.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenus() {
    return of([
      new MenuAccess('menu.layouts', undefined, null, false, false, [
        new MenuAccess('submenu.simpleFullWidth', 'example-simple-full-width', null, false, false),
        new MenuAccess('submenu.simpleTabbed', 'example-simple-tabbed', null, false, false)
      ]),
      new MenuAccess('menu.sobre', 'sobre', null, false, false, null),
    ]);
  }
}
