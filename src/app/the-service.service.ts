import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheServiceService {

  constructor(private httpClient: HttpClient) {
  }

  public signIn(login, password) {
    const token = `Basic ${ btoa(`${ login }:${ password }`) }`;
    const headers = new HttpHeaders({ Authorization: token });
    return this.httpClient.get(`/api/login`, {
      headers,
      withCredentials: true,
    });
  }
}
