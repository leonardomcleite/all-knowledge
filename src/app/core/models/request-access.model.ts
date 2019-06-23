import { UserAuth } from './user-auth.model';

export class RequestAccessModel {
  userAuth: UserAuth;
  menuAccess: string;

  constructor(userAuth: UserAuth, menuAccess: string) {
    this.userAuth = userAuth;
    this.menuAccess = menuAccess;
  }
}
