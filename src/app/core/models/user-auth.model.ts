export class UserAuth {
  public user: string;
  public email: string;
  public password: string;

  constructor(user?: string, email?: string, password?: string) {
    this.user = user;
    this.email = email;
    this.password = password;
  }
}
