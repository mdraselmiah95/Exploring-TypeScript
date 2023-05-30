"use strict";
// (null , undefined, any) type, Type Assertions(as)
// let user: User | null | undefined = null;
var user = {};
user = { name: "user", email: "user@gmail.com" };
user === null || user === void 0 ? void 0 : user.email;
var description = {};
var friends = ["shomon", "Kazol"];
var userOne = {
    name: "user",
    email: "x@gmail.com",
};
// friends.forEach((it) => {
//   description[it] = it + "on fire";
// });
