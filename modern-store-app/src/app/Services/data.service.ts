import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

    private serviceUrl: string = "http://localhost:55090/";

    constructor(private http: Http) {
    }

    createUser(data: any): any {
        return this.http
            .post(this.serviceUrl + "v1/customers", data)
            .map((res: Response) => res.json());
    }

    authenticate(data: any): any {
        let dt = "grant_type=password&username=" + data.username + "&password=" + data.password;
        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
        let option = new RequestOptions({ headers: headers });

        return this.http
            .post(this.serviceUrl + "v1/authenticate", dt, option)
            .map((res: Response) => res.json());
    }

    getProducts(): any {
        return this.http
            .get(this.serviceUrl + "v1/products")
            .map((res: Response) => res.json());
    }
        
    createOrder(data: any): any {

        let token = localStorage.getItem('mws.token');
        let headers = new Headers({ "Content-Type": "application/json" });
        headers.append("Authorization",`Bearer ${token}`);
        let option = new RequestOptions({ headers: headers });

        return this.http
            .post(this.serviceUrl + "v1/customers", data, option)
            .map((res: Response) => res.json());
    }
}