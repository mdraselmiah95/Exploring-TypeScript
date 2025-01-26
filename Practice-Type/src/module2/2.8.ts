{
  //
  // TODO : Promise
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "This is a test data 🚀";
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong ‼️");
      }
    });
  };
  // calling the create promise function
  const showData = async () => {
    const data = await createPromise();
    console.log({ data });
  };

  showData();

  //
}
