// declare variable and type
// Typescript compiler will check the type of the variable upon initialization
let sales = 123_456_789;
let course: string = 'TypeScript';
let isPublshed: boolean = true;

// assumed to be the "any" type
// defeats purpose of TypeScript type checking.  Avoid if possible
let level;
level = 1;
level = "a";

// declare number array
let numbers: number[] = [1, 2, 3];

// Tuples
// strongly declare what types of values can be stored in the array
// 1, "Mosh"
let user: [number, string] = [1, 'Mosh']
// Will work, but avoid this.  Use tuples for only 2 values if possible
user.push(1)

// Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// use Pascal case for enum names
// by default, enum values start at 0
const enum Size { Small, Medium, Large }

// to change starting num, declare enum with a different number
// if using a string, you need to explicitly declare the string for each enum value
// enum Size { Small = 1, Medium, Large }

let mySize: Size = Size.Small;
console.log(mySize);

// Funtions.  question mark makes argument optional 
function calculateTax(income: number, taxYear = 2022): number{
  if(taxYear < 2022)
    return income * 1.2;
  return income * 1.3  
}

calculateTax(10_000, 2022)