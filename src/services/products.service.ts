import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";



export function getAllProducts(http: Http): Observable<any> {
    return http.get("assets/products.json").pipe(map((response: any) => response.json()));
    
}