// TODO :Problem 3: Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

function filterEvenNumbers(numbers: number[]): number[] {
  let evenNum: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNum.push(numbers[i]);
    }
  }
  return evenNum;
}

// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Sample Output:
// [2, 4, 6]
