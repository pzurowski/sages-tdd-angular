describe('TheObject', () => {
  it('should call blackbox method when created', () => {
    const blackBox = new BlackBox();
    spyOn(blackBox, 'method').and.callThrough();

    new TheObject(blackBox);

    expect(blackBox.method).toHaveBeenCalled();
  });

  it('should call blackbox method when created without parameters', () => {
    const blackBox = new BlackBox();
    spyOn(blackBox, 'method').and.callThrough();

    new TheObject(blackBox);

    expect(blackBox.method).toHaveBeenCalledWith();
  });

  it('should collect data from blackbox', () => {
    const theData = {};
    const blackBox = new BlackBox();
    spyOn(blackBox, 'method').and.returnValue(theData);

    const theObject = new TheObject(blackBox);

    expect(theObject.data).toBe(theData);
  });

  it('should call blackboxed function', () => {
    const theDataFn = jasmine.createSpy();
    const blackBox = new BlackBox();
    spyOn(blackBox, 'method').and.returnValue(theDataFn);

    const theObject = new TheObject(blackBox);
    theObject.invoke();

    expect(theDataFn).toHaveBeenCalled();
  });
});
