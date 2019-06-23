export class ErrorBody {
  title: string;
  code: number;
  method: string;
  url: string;
  body: string;
  message: string;

  constructor(title: string, code: number, method: string, url: string, message: string, body: string) {
    this.title = title;
    this.code = code;
    this.method = method;
    this.url = url;
    this.message = message;
    this.body = body;
  }
}
