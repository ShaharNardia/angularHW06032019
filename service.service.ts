import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private usersvc: HttpClient) { }

  getUsers() {
    return this.usersvc.get<any>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id) {
    return this.usersvc.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
