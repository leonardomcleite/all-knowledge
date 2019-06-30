export class MenuAccess {
  id: number;
  nameMenu: string;
  description: string;
  route: string;
  icon: string;
  hidden: boolean;
  favorite: boolean;
  children: any;
  count: boolean;

  constructor(nameMenu?: string, route?: string, icon?: string, hidden?: boolean, favorite?: boolean, count?: boolean, children?) {
    this.nameMenu = nameMenu;
    this.route = route;
    this.icon = icon;
    this.hidden = hidden;
    this.favorite = favorite;
    this.children = children;
    this.count = count;
  }
}
