import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { User } from './user/user';
import { catchError,map,tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  url:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).
    pipe(tap(_=>console.log('successfully fetched')),
      catchError(this.handleError<User[]>('getUsers',[]))
      );
  }
  getUserById(id:number): Observable<User> {
    const url = '${this.url}/${id}';
    return this.http.get<User>(url)
    .pipe(
      tap(_=>console.log('fetched id')),catchError(this.handleError<User>('getHero id ${id}'))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
}
