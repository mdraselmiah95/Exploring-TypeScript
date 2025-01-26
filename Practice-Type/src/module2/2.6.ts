{
  //

  // TODO: constraints

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string },
  >(
    student: T
  ) => {
    const course = "Next Level Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 2,
    name: "Tom hank",
    email: "tom@gmail.com",
  });

  //
}
