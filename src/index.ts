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