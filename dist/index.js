"use strict";
let sales = 123456789;
let course = "TypeScript";
let isPublshed = true;
let level;
level = 1;
level = "a";
let numbers = [1, 2, 3];
let user = [1, "Mosh"];
user.push(1);
let mySize = 0;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map