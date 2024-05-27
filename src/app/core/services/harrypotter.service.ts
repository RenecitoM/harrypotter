import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hechizos } from '../../interfaces/harry_potter';

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {

  constructor(private http: HttpClient) { }

  getInfoList(): Observable<any>{
    return this.http.get( 'https:harry-potter-api.onrender.com/db').pipe(res=>res);

  }

}
