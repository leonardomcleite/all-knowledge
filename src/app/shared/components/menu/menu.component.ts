import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuService } from './services/menu.service';
import { MenuModel } from '@all-knowledge/core/models/menu-access.model';

@Component({
  selector: 'ak-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() clickMenu: EventEmitter<any> = new EventEmitter<any>();

  menus: [MenuModel];

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuService.getMenus().toPromise().then((returnQuery: [MenuModel]) => {
      this.menus = returnQuery;
    });
  }

  onClickMenu(next) {
    if (next) {
      this.clickMenu.next();
    }
  }

  calcPadding(i) {
    return `${(10 * (i + 1))}px`;
  }

}
