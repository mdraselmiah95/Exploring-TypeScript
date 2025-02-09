// TODO: Problem 1: Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

function repeatString(str: string, count: number) {
  return str.repeat(count);
}

// Sample Input:
repeatString("Hello!", 3);

console.log(repeatString("Hello!", 3));

// Sample Output:
("Hello!Hello!Hello!");
