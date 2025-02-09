{
  // TODO :Problem 5: You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

  // Hints: Use a reduce() method to sum the grades. average = total grades/ total length

  interface Student {
    name: string;
    age: number;
    grades: number[];
  }

  function calculateAverageGrade(student: Student): number {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    return total / student.grades.length;
  }

  // Sample Input:
  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log({ averageGradeForBob });

  // Sample Output:
  //   83;
}
