describe('sum', () => {
  it('should add numbers', () => {
    const result = sum(1, 2);

    expect(result).toEqual(3);
  });

  it('should add other numbers', ()=>{
    const result = sum(3,5);

    expect(result).toEqual(8);
  });
});

