import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
    providedIn: 'root'
})

export class RestApiService {

    headers: any;

    constructor(public httpClient: HttpClient) {

        this.headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    }

    get_API(URL: any) {
        return this.httpClient.get(`${environment.apiUrl}${URL}`, { headers: this.headers });
    }

    post_API(URL: any, data: any) {
        return this.httpClient.post(`${environment.apiUrl}${URL}`, data, { headers: this.headers });
    }

}