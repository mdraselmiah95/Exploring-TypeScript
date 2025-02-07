{
  // static

  class Counter {
    count: number = 0;
    increment() {
      return (this.count = this.count + 1);
    }

    decrement() {
      return (this.count = this.count - 1);
    }
  }

  //
}
