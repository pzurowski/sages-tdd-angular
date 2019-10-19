describe('sum', () => {
  it('should add numbers', () => {
    const result = sum(1, 2);

    expect(result).toEqual(3);
  });

  it('should add other numbers', ()=>{
    const result = sum(3,5);

    expect(result).toEqual(8);
  });

  it('should add one number',()=>{
    const result = sum(8);

    expect(result).toEqual(8);
  });

  it('should add no number',()=>{
    const result = sum();

    expect(result).toEqual(0);
  });

  it('should add three numbers', () => {
    const result = sum(5, 8, 13);

    expect(result).toEqual(26);
  });
});

