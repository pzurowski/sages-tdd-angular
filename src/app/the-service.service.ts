import { ApplicationInitStatus, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TheServiceService {

  constructor(private initStatus: ApplicationInitStatus) {
  }

  size(input: string) {
    return input.length;
  }

  doComplexity() {
    if (!this.initStatus.done) {
      throw new Error('not in initialization');
    }
  }
}
