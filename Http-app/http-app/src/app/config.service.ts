import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 response: any;
  constructor(private http: HttpClient) {
    http.get("https://api.github.com/users")
    .subscribe((response) => {this.response = response})

   }
}
