describe('setTimeout testing', () => {

  it('INVALID because do not enter to expect block', () => {
    let a = 4;
    setTimeout(() => {
      expect(a).toEqual(9);
    });
    a = 5
  });

  it('VALID, but breaks AAA rule', (done) => {
    let a = 4;
    setTimeout(() => {
      expect(a).toEqual(9);
      done();
    });
    a = 5
  });

  it('VALID and conforms AAA rule', (done) => {
    let a = 4;

    setTimeout(() => {
      asserts(a);
      done();
    });
    a = 5;

    function asserts(result) {
      expect(result).toEqual(9);
    }
  });
});
