import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TheServiceService } from './the-service.service';

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

    service.signIn('login', 'password').subscribe(item => result.push(item));

    const req = httpMock.expectOne(`/api/login`);
    req.flush({});
    expect(req.request.headers.get('Authorization')).toEqual(
      'Basic bG9naW46cGFzc3dvcmQ=',
    );
    expect(req.request.withCredentials).toEqual(true);
    expect(req.request.method).toBe('GET');
    expect(result).toEqual([{}]);
  });

});
