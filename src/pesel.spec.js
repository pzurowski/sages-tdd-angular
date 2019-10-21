describe('pesel validity function', () => {

  it('should accept 11 characters long strings', () => {
    const result = validatePesel('61111111111');

    expect(result).toEqual(true);
  });

  it('should not accept strings longer than 11 chars', ()=>{
    const result = validatePesel('12345678901234567890');

    expect(result).toEqual(false);
  });

  it('should not accept strings shorter than 11 chars', ()=>{
    const result = validatePesel('1234567');

    expect(result).toEqual(false);
  });

  it('should complain about string shorter than 11 chars', ()=>{
    const result = extendedValidatePesel('1234567');

    expect(result).toEqual({result: false, errors:['short']});
  });

  it('should not accept strings longer than 11 chars', ()=>{
    const result = extendedValidatePesel('12345678901234567890');

    expect(result).toEqual({result: false, errors:['long']});
  });

  it('should not complain about length of 11 characters long strings', () => {
    const result = extendedValidatePesel('61111111111');

    expect(result).toEqual({result: true, errors:[]});
  });

  it('should not accepts non-digits chars',()=>{
    const result = validatePesel('abcdefghijk');

    expect(result).toEqual(false);
  });

  it('should not accepts non-digits chars 2',()=>{
    const result = validatePesel('3bcdefghijk');

    expect(result).toEqual(false);
  });

  it('should complain about non-digit chars',()=>{
    const result = extendedValidatePesel('3bcdef');

    expect(result.result).toEqual(false);
    expect(result.errors).toContain('nonDigit');
  });

  it('should complain about wrong checksum', ()=>{
    const result = extendedValidatePesel('62111111111');

    expect(result.errors).toContain('checksum');
  })

});
