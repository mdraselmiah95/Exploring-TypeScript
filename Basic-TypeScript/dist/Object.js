"use strict";
var _a, _b;
var commonUser = {
    company: "Programming Hero",
    firstName: "Rasel",
    lastName: "Mia",
    isMarried: false,
};
var addArrow = function (num1, num2) { return num1 + num2; };
var testUser = {
    name: "Rafi",
    balance: 10,
    addBalance: function (balance) {
        return "My new balance is :".concat(this.balance + balance);
    },
};
var arrayOne = [1, 2, 3, 4, 5, 6, 7];
var newArray = arrayOne.map(function (item) { return item * item; });
// rest operator
var coolFriends = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.forEach(function (friend) { return console.log("Hi cool bro ".concat(friend)); });
};
coolFriends("Ramim", "Rafi", "Tamim", "Saif", "Shamim", "Saiful", "Arman");
var stdentOne = {
    name: "Rasel",
    age: 28,
    contact: "01845515895",
    gender: "male",
    isMarried: false,
};
var addTwo = function (num1, num2) { return num1 + num2; };
var userThree = {
    name: "Rohit",
    address: {
        city: "DHK",
        road: "Love road",
        permanentAddress: "cool",
    },
};
var addressTest = (_b = (_a = userThree === null || userThree === void 0 ? void 0 : userThree.address) === null || _a === void 0 ? void 0 : _a.presentAddress) !== null && _b !== void 0 ? _b : "No Present Address";
console.log({ addressTest: addressTest });
var throwError = function (msg) {
    throw new Error(msg);
};
throwError("In the Vog O Ma");
