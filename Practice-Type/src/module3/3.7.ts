{
  // static

  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count = Counter.count + 1);
    }

    decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  const instance1 = new Counter();

  //
}
