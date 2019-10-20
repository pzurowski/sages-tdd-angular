class BlackBox {
  method() {
    return () => Math.random() > .5 ? 'something' : 'else';
  }
}

class TheObject {
  constructor(blackbox) {
    this.data = blackbox.method();
  }

  invoke(){
    return this.data();
  }
}
