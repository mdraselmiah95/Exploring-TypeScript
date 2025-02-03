{
  // Mapped Type
  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString = {
    [key in keyof AreaNumber]: boolean;
  };

  //
}
