import { Component } from '@angular/core';
import { TheServiceService } from './the-service.service';
import { of } from 'rxjs';

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

  constructor(private dataService: TheServiceService) {

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
