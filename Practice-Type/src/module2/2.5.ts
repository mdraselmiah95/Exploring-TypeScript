{
  //
  //TODO: function with genetics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  type User = {
    id: number;
    name: string;
  };

  const newGenObj = createArrayWithGeneric<User>({
    id: 234,
    name: "Rasel",
  });

  const reas1 = createArray("BD");
  //
}
