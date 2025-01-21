{
  //
  //TODO: function with genetics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const createArrayWithGeneric2 = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  type User = {
    id: number;
    name: string;
  };

  const newGenObj = createArrayWithGeneric<User>({
    id: 234,
    name: "Rasel",
  });

  const newGenObj2 = createArrayWithGeneric2<string, number>("BD", 222);

  const reas1 = createArray("BD");

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Development";

    return {
      ...student,
      course,
    };
  };
  //
}
