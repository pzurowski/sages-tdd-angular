import { async, TestBed } from '@angular/core/testing';
import { AppComponent, infoDelayTime, schedulerToken } from './app.component';
import { TheServiceService } from './the-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { getTestScheduler, hot } from 'jasmine-marbles';
import { TheServiceMockService } from './the-service.mock.service';
import { randomFnToken } from './random';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: TheServiceService, useClass: TheServiceMockService},
        {provide: randomFnToken, useValue: ()=>0.3},
        { provide: schedulerToken, useValue: getTestScheduler() },
        { provide: infoDelayTime, useValue: 80 },

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tdd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('tdd');
  });

  it('should sign in',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = TestBed.get<TheServiceService>(TheServiceService);
    spyOn(dataService,'signIn')

    app.signIn('user', 'password');

    expect(dataService.signIn).toHaveBeenCalledWith('user','password');
  });

  it('should fetch current user profile',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const dataService = TestBed.get<TheServiceService>(TheServiceService);
    spyOn(dataService,'signIn');
    spyOn(dataService,'fetchProfile').and.returnValue(of({profile: 'aaa'}));
    app.signIn('user', 'password')

    app.fetchProfile();

    expect(dataService.fetchProfile).toHaveBeenCalledWith('user');
    expect(app.profile).toEqual({profile: 'aaa'})
  })

  it('should fetch current user profile', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.signIn('user', 'password');

    expect(app.profile$).toBeObservable(hot('---(a|)', { a: { profile: 'aaa' } }));
    // expect(dataService.fetchProfile).toHaveBeenCalledWith('user');
    // expect(app.profile).toEqual({profile: 'aaa'})
  })

  it('should show info box after given timeout', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    const result = app.delay$;

    expect(result).toBeObservable(hot('--------(t|)', { t: true }));

  });
});
