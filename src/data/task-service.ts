import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskData(postTokenData: any) {
    return this.http.get('https://stormy-shore-22254-b36f0b7e9adf.herokuapp.com/api/task?token=' + postTokenData);
  }

  postUserLogOn(postUserLogonData: Object) {
    return this.http.post('https://stormy-shore-22254-b36f0b7e9adf.herokuapp.com/api/login', postUserLogonData);
  }



}
