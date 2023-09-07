import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = 'https://228e-181-231-122-56.ngrok-free.app/student'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
    return this.http.get(this.url + '/getAll')
  }
}


