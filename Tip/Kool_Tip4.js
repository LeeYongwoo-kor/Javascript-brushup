// https://www.loginradius.com/blog/engineering/16-javascript-hacks-for-optimization/
// 1. Use Array Filter
const falsyArr = [null, false, undefined, 1, 2, 3, NaN];
console.log(falsyArr.filter((n) => n));
console.log(falsyArr.filter(Boolean));

// 2. Checking values in an Object
const myObj = {
  name: "Lee",
  age: 50,
  job: {
    category: "IT",
    salary: 1000000,
  },
  country: "Korea",
};
console.log(Object.keys(myObj).length);

// 3. Shuffle Array in Javascript
const letters = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
console.log([...letters].sort(() => Math.random() - 0.5));
