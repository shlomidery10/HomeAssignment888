import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
baseUrl:string='http://localhost:3000'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      
    })
  }

  getCountriesByContinentCode(code:string)
  {
    return this.http.get(this.baseUrl+'/getCountriesByContinentCode?code='+code,this.httpOptions);
  }
  getContinents()
  {
    return this.http.get(this.baseUrl+'/getContinents',this.httpOptions);
  }

      }
          