import { TheServiceService } from './the-service.service';
import { hot } from 'jasmine-marbles';
import { HttpClient } from '@angular/common/http';

export class TheServiceMockService {

  signIn() {
    return hot('---(a|)', { a: 'user' });
  }

  fetchProfile() {
    return hot('---(a|)', { a: { profile: 'aaa' } });
  }
}
