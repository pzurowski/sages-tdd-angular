import { InjectionToken } from '@angular/core';

export const randomFnToken = new InjectionToken('random function')

export function defaultRandomFn() {
  return Math.random();
}
