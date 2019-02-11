import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // ` different from '  ? :S
  getByType(type) {
    return this.http.get(`https://swapi.co/api/${type}`);
  }

  getById(type, id) {
    return this.http.get(`https://swapi.co/api/${type}/${id}`);
  }

  getByUrl(url) {
    return this.http.get(url);
  }

}
