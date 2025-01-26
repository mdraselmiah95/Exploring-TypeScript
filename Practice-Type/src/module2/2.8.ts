{
  //
  // TODO : Promise

  const getTodo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    console.log({ data });
  };

  getTodo();

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "This is a test data 🚀" };
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong ‼️");
      }
    });
  };
  // calling the create promise function
  const showData = async (): Promise<Something> => {
    const data = await createPromise();
    console.log({ data });
    return data;
  };

  showData();

  //
}
