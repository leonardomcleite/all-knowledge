export class ParamsNotification {
  type: string;
  title: string;
  message: string;
  timeout: boolean;
  time: number;

  constructor(type: string, title: string, message: string, timeout: boolean, time: number) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.timeout = timeout;
    this.time = time;
  }

}
