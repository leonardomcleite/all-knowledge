import { Component, OnInit } from '@angular/core';
import { MenuAccess } from 'src/app/core/models/menu-access.model';
import { MenuService } from './services/menu.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'ak-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: [MenuAccess];
  activeRoute: any;

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.router.events
    // .filter(event => event instanceof NavigationStart)
    // .subscribe((event:NavigationStart) => {
    //   console.log(event);
      
    // })
    this.menuService.getMenus().toPromise().then((returnQuery: [MenuAccess]) => {
      this.menus = returnQuery;
    });
  }

}
