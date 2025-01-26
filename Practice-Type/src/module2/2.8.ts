{
  //
  // TODO : Promise

  const createPromise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "This is a test data 🚀";
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong ‼️");
      }
    });
  };

  //
}
