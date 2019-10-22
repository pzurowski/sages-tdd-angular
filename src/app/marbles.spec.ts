import { of } from 'rxjs';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { delay, map, mergeMap, tap } from 'rxjs/operators';

describe('marbles', () => {

  it('1', () => {
    const stream = of('aa');

    expect(stream).toBeObservable(hot('(a|)', {
      a: 'aa',
    }));
  });

  it('2', () => {
    const stream = hot('--a---b--', {
      a: 1,
      b: 3,
    });

    const output = stream.pipe(
      map(x => 2 * x),
    );

    expect(output).toBeObservable(hot('--a---b--', {
      a: 2,
      b: 6,
    }));
  });

  it('3', () => {
    const stream = hot('--a---b--', {
      a: 1,
      b: 3,
    });

    const output = stream.pipe(
      map(x => 2 * x),
      delay(30, getTestScheduler()),
    );

    expect(output).toBeObservable(hot('-----a---b--', {
      a: 2,
      b: 6,
    }));
  });


  it('4', () => {
    const stream = hot('--a---b--', {
      a: 1,
      b: 3,
    });

    const output = stream.pipe(
      map(x => 2 * x),
      mergeMap(x => cold('---(x|)', { x: `${ x }` })),
    );

    expect(output).toBeObservable(hot('-----a---b--', {
      a: '2',
      b: '6',
    }));
  });

  it('5', () => {
    const stream = hot('--a---b--');
    const output = stream.pipe(
      tap(x => {
        if (x === 'b') {
          throw new Error('xx');
        }
      }),
    );

    expect(output).toBeObservable(hot('--a---#', { a: 'a' }, new Error('xx')));
  });
});
