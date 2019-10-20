function pass(v) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(v), 1000)
  });
}

describe('promise testing', () => {
  it('INVALID - does not enter in promise', () => {
    let a = 4;
    pass().then(() => {
      expect(a).toEqual(9);
    });
    a = 5
  });

  it('VALID, but breaks AAA rule', (done) => {
    let a = 4;
    pass().then(() => {
      expect(a).toEqual(9);
      done();
    });
    a = 5
  });

  it('VALID and conforms AAA rule, but looks ugly', (done) => {
    let a = 4;

    pass().then(() => {
      asserts(a);
    });
    a = 5;

    function asserts(result) {
      expect(result).toEqual(9);
      done();
    }
  });

  it('also VALID and conforms AAA rule and not so ugly', (done) => {
    let a = 4;

    const result = pass();
    a = 5;

    result.then(() => {
      expect(a).toEqual(9);
      done();
    });
  });

  it('also VALID and conforms AAA rule and almost pretty', () => {
    let a = 4;

    const thePromise = pass();
    a = 5;

    return thePromise.then(() => {
      expect(a).toEqual(9);
    });
  });

  it('VALID and conforms AAA rule, looks superb', async () => {
    let a = 4;

    await pass();
    a = 5;

    expect(a).toEqual(9);
  });

  // INVALID -- provided done without invocation
  it('should not work and shows why it is invalid xxx', async (done) => {
    let a = 4;

    await pass();
    a = 5;

    expect(a).toEqual(9);
  });

});
