{
  // type assertion
  let anything: any;

  anything = "Next Level Web Development";
  anything = "10222";
  anything as number;

  const kgToGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
}
