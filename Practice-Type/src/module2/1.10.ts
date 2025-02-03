{
  // Mapped Type
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];

  // keyof AreaNumber=> "height" | "width"

  // T= {height:string,width:number}
  // key => T["height"] => string
  // key => T["width"] => number

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "10",
    width: 20,
  };

  //
}
