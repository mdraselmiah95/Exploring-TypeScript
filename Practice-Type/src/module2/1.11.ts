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

  type MyObj2 = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  // Record type is used to create an object type whose property keys are of type K and whose property values are of type T.

  // Omit type is used to create a type that omits specific properties from another type.

  // Readonly type is used to create a type that makes all properties of another type readonly.

  // Required type is used to create a type that makes all properties of another type required.

  // Pick type is used to create a type by picking specific properties from another type.

  // Exclude type is used to create a type by excluding specific types from another type.

  // Extract type is used to create a type by extracting specific types from another type.

  // NonNullable type is used to create a type by excluding null and undefined from another type.

  // Parameters type is used to create a type from the parameters of a function type.

  // ConstructorParameters type is used to create a type from the constructor parameters of a constructor function type.

  // ReturnType type is used to create a type from the return type of a function type.

  // InstanceType type is used to create a type from the instance type of a constructor function type.

  // ThisParameterType type is used to create a type from the this parameter type of a function type.

  // OmitThisParameter type is used to create a type from a function type with the this parameter removed.

  // ThisType type is used to create a type that represents the type of this in a function type.

  //
}
