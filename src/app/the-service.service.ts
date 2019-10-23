import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TheServiceService {
  private _currency$ = new BehaviorSubject( 'USD')
  currency$: Observable<string> = this._currency$.asObservable().pipe(
    distinctUntilChanged()
  );

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


  fetchProfile(user: string) {
    return this.httpClient.get(`https://swapi.co/api/people/${user}`)
  }

  changeCurrency(currency: string) {
    this._currency$.next(currency);
  }
}
