import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set("Access-Control-Allow-Origin", "*");
    const authReq = req
      .clone({ headers })
      .clone({ url: `${"http://localhost:8000"}${req.url}` });
    return next.handle(authReq);
  }
}

// .clone({ url: `${"http://localhost:8000"}${req.url}` })
// "Access-Control-Allow-Origin", "*"
