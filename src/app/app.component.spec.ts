import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TheServiceService } from './the-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule],
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
});
