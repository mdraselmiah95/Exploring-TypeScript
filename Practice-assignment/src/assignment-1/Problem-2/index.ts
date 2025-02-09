// TODO :Problem 2: Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

{
  function findLargestNumber(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Array must not be empty");
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
    }
    return largest;
  }
  // Sample Input:
  findLargestNumber([10, 5, 8, 20, 3]);
  console.log(findLargestNumber([10, 5, 8, 20, 3]));

  // Sample Output:
  20;
}
