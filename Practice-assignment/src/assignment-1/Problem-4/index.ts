{
  // TODO :Problem 4: Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

  function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
  }

  console.log(reverseArray(["apple", "banana", "cherry"]));

  console.log(reverseArray([10, 20, 30]));
}
