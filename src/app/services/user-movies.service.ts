import { Injectable } from '@angular/core';
import { RegisterUserSchema } from '../models/register-user';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class UserMoviesService {

  constructor(private http: HttpClient) { }

  testApiCall(user) {
    console.log('API call');
    const userReq = new HttpRequest<any>('GET', 'assets/test-data.json');
    console.log(userReq);
    return this.http.post<RegisterUserSchema>('/api/users', user)
    .pipe(
      catchError((err) => {
        console.log(err);
        return of({name: undefined,
          email: undefined
        });
      })
    );
  }

  saveRegisteredUser(user: RegisterUserSchema): Observable<RegisterUserSchema> {
    console.log(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<RegisterUserSchema>('/api/users', user)
    .pipe(
      catchError((err) => {
        console.log(err);
        return of({name: undefined,
          email: undefined
        });
      })
    );
  }
}
