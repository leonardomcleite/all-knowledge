import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuAccess } from '@all-knowledge/core/models/menu-access.model';

@Component({
  selector: 'ak-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: [MenuAccess];

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuService.getMenus().toPromise().then((returnQuery: [MenuAccess]) => {
      this.menus = returnQuery;
    });
  }

}
