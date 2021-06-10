import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const userToken = 'secure-user-token';
        const modifiedReq = req.clone(
            {
                //
                //url: 'http://192.168.1.27:8082/' + req.url,
                headers: req.headers
                    .set('Content-Type', 'application/json')

            },
        );
        console.log(modifiedReq);
        return next.handle(modifiedReq);
    }
}
