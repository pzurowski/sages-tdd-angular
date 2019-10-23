import { Component, Inject, InjectionToken } from '@angular/core';
import { TheServiceService } from './the-service.service';
import { of, SchedulerLike } from 'rxjs';
import { delay } from 'rxjs/operators';
import { getTestScheduler } from 'jasmine-marbles';

export const schedulerToken = new InjectionToken('async scheduler');
export const infoDelayTime = new InjectionToken('time to show info');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdd';
  currentUser: string;
  profile: any;

  profile$ = this.dataService.fetchProfile('3');
  delay$ = of(true).pipe(
    delay(this.infoDelay, this.scheduler),
  );

  constructor(private dataService: TheServiceService,
              @Inject(schedulerToken) private scheduler: SchedulerLike,
              @Inject(infoDelayTime) private infoDelay: number,
  ) {

  }

  signIn(username: string, password: string) {
    this.currentUser = username;

    this.dataService.signIn(username, password);
  }

  fetchProfile() {
    this.dataService.fetchProfile(this.currentUser)
      .subscribe(profile => this.profile = profile);
  }
}
