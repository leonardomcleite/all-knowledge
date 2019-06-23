export class MenuAccess {
  id: number;
  nameMenu: string;
  description: string;
  route: string;
  icon: string;
  hidden: boolean;
  favorite: boolean;
  submenus: any;

  constructor(nameMenu?: string, route?: string, icon?: string, hidden?: boolean, favorite?: boolean, submenus?) {
    this.nameMenu = nameMenu;
    this.route = route;
    this.icon = icon;
    this.hidden = hidden;
    this.favorite = favorite;
    this.submenus = submenus;
  }
}
