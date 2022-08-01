import { Injectable } from '@angular/core';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  configTabIdx = 0;

  constructor(private restApiService: RestApiService) { }

  login(data: any) {
    return this.restApiService.post_API('/login', data);
  }

}
