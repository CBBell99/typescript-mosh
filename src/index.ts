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


function render(document){
  console.log(document);
  
}