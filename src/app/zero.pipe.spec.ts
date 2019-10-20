import { ZeroPipe } from './zero.pipe';

describe('ZeroPipe', () => {
  it('create an instance', () => {
    const pipe = new ZeroPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "zero" when 0 is an input',()=>{
    const pipe = new ZeroPipe();

    const result = pipe.transform(0);

    expect(result).toEqual('zero');
  });

  it('should return "non-zero" when 0 is not an input',()=>{
    const pipe = new ZeroPipe();

    const result = pipe.transform('');

    expect(result).toEqual('non-zero');
  });

  it('should return alternative value when 0 is an input',()=>{
    const pipe = new ZeroPipe();

    const result = pipe.transform(0, '0️');

    expect(result).toEqual('0️');
  });

  it('should return "non-zero" when 0 is not an input',()=>{
    const pipe = new ZeroPipe();

    const result = pipe.transform('something', '0️', '❇️');

    expect(result).toEqual('❇️');
  });
});
