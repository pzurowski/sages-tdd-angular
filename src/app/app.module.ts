import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, infoDelayTime, schedulerToken } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { defaultRandomFn, randomFnToken } from './random';
import { SignInComponent } from './sign-in/sign-in.component';
import { AsyncScheduler } from 'rxjs/internal/scheduler/AsyncScheduler';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {provide: randomFnToken, useValue: defaultRandomFn},
    { provide: schedulerToken, useValue: AsyncScheduler },
    { provide: infoDelayTime, useValue: 10 * 60 * 1000 },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
