import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TheServiceService } from './the-service.service';
import { hot } from 'jasmine-marbles';
import { merge } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

describe('TheServiceService', () => {
  let service: TheServiceService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TheServiceService],
  }));
  beforeEach(() => service = TestBed.get(TheServiceService));
  beforeEach(() => httpMock = TestBed.get(HttpTestingController));

  let httpMock: HttpTestingController;

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform sign in', () => {
    const result = [];

    service.signIn('login', 'password')
      .subscribe(item => result.push(item));

    const req = httpMock.expectOne(`/api/login`);
    req.flush({});
    expect(req.request.headers.get('Authorization')).toEqual(
      'Basic bG9naW46cGFzc3dvcmQ=',
    );
    expect(req.request.withCredentials).toEqual(true);
    expect(req.request.method).toBe('GET');
    // expect(req.request.body).toBe('GET');
    expect(result).toEqual([{}]);
  });

  it('should fetch user profile',()=>{
    const result = [];

    service.fetchProfile('user').subscribe(profile => result.push(profile));

    const req = httpMock.expectOne('https://swapi.co/api/people/user');
    req.flush({});
    expect(result).toEqual([{}])
  });

  it('should fetch other user profile',()=>{
    const result = [];

    service.fetchProfile('other').subscribe(profile => result.push(profile));

    const req = httpMock.expectOne('https://swapi.co/api/people/other');
    req.flush({});
    expect(result).toEqual([{}])
  });

  it('should store current currency', () => {
    const result = service.currency$;

    expect(result).toBeObservable(hot('a------', { a: 'USD' }));
  });

  it('should change a currency', () => {
    const result = merge(
      hot('---x').pipe(
        tap(() => service.changeCurrency('PLN')),
        filter(() => false),
      ),
      service.currency$,
    );

    expect(result).toBeObservable(hot('a--b---', { a: 'USD', b: 'PLN' }));
  });

  it('should not change to the same currency', () => {
    const result = merge(
      hot('---x----x--').pipe(
        tap(() => service.changeCurrency('PLN')),
        filter(() => false),
      ),
      service.currency$,
    );

    expect(result).toBeObservable(hot('a--b---', { a: 'USD', b: 'PLN' }));
  });


});
