import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get('http://127.0.0.1:8000/api/personTable/').pipe(
      tap((data: any) => {
        return data;
      })
    );
  }



}
