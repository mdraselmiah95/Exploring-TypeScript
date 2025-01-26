{
  //
  //TODO: generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  // const person1: Owner2 = "";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Rasel",
    age: 30,
    address: "DHK",
  };

  const car = {
    modal: "Toyota 102",
    year: 2033,
  };

  const result1 = getPropertyValue(user, "name");

  const result2 = getPropertyValue(car, "modal");

  //
}
