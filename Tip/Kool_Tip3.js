// https://betterprogramming.pub/10-modern-javascript-tricks-every-developer-should-use-377857311d79
// 1. Conditionally Add Properties to Object
let condition = true;

const person = {
  id: 1,
  name: "Moon Jaein",
  ...(condition && { age: 60 }),
};
console.table(person);

// 2. Check if a Property Exists in an Object
if ("age" in person) {
  console.log("Dreams come true.");
}

// 3. Dynamic Property Names in Objects
let dynamic = "chocolate";

const item = {
  [dynamic]: {
    taste: "very good",
    price: 30,
  },
};
console.table(item);

// 4. Object Destructuring With a Dynamic Key
const key = "price";
const { [key]: value } = item.chocolate;
console.log(value);

// 5. Nullish Coalescing (?? Operator)
// -> The ?? operator is useful when you want to check whether a variable is "null" or "undefined".
const myBrain = null ?? "Not Null!!";
console.log(myBrain);

const myBrainStorage = 0 ?? "Not Zero!!";
console.log(myBrainStorage);

// 6. String and Integer Conversions
const thisIsString = "123456789";
console.log(+thisIsString, typeof thisIsString, typeof +thisIsString);

const thisIsNumber = 123456789;
console.log(thisIsNumber + "", typeof (thisIsNumber + ""));

// 7. Check Falsy Values in an Array
const notFalsyArr = [null, false, "I'm spy", undefined, 0];
const falsyArr = [null, false, "", undefined, NaN, 0];

console.log(notFalsyArr.filter(Boolean)); // ["I'm spy"]
console.log(notFalsyArr.some(Boolean)); // true
console.log(notFalsyArr.every(Boolean)); // false

console.log(falsyArr.filter(Boolean)); // []
console.log(falsyArr.some(Boolean)); // false
console.log(falsyArr.every(Boolean)); // false

// 8. Flattening Arrays of Arrays
const myArr = [0, 1, 2, [[[3, 4]]], [5, [6]]];
console.log(myArr.flat());
console.log(myArr.flat(1)); // same flat()
console.log(myArr.flat(2));
console.log(myArr.flat(Infinity)); // [0, 1, 2, 3, 4, 5, 6]
