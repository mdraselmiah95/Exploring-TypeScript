{
  // Utility Types

  type PersonType = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<PersonType, "name" | "age">;

  // Omit
  type ContactInfo = Omit<PersonType, "name" | "age">;

  // Required
  type RequiredPerson = Required<PersonType>;

  // Record
  type MyObj = {
    a: string;
    b: string;
  };

  const obj1: MyObj = {
    a: "1",
    b: "2",
  };

  //
}
