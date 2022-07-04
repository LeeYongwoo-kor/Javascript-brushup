// https://javascript.plainenglish.io/top-40-free-programming-courses-for-beginners-bc39253e784c

const foods = [
  { name: "🍔", group: 1, price: 30.89 },
  { name: "🍟", group: 1, price: 20.71 },
  { name: "🍕", group: 2, price: 45.83 },
  { name: "🌭", group: 1, price: 10.31 },
  { name: "🍿", group: 2, price: 20.01 },
];

// 1. Reduce if…else noodle code
const getPriceByName = (name) => {
  const foodMap = {
    "🍔": 300,
    "🍟": 500,
    "🍕": 1000,
  };
  return foodMap[name];
};

console.log(getPriceByName("🍟"));

// 2. Use “filter" and "map” instead of “for” loops
const names = foods.filter((food) => food.group === 1).map((food) => food.name);

console.log(names);

// 3. Swap two values using destructuring
let myDessert = "🥞";
let yourDessert = "🥐";
[myDessert, yourDessert] = [yourDessert, myDessert];

console.log(myDessert, yourDessert);

// 4. Smarter Object.entries
Object.prototype["🥓"] = 900;

Object.entries(foods).forEach(([key, value]) => {
  console.log(key, value);
});

// 5. Easy way to flatten an array
const foodHell = [
  ["🍔", ["🍫"]],
  ["🍨", ["🍿", ["🍵"]]],
];

const foodHeaven = foodHell.flat(Infinity);
console.log(...foodHeaven);

// 6. Rounding Trick
const discountedFoods = foods.map((it) => {
  return {
    name: it.name,
    price: ~~it.price,
  };
});

console.log(discountedFoods);

// 7. Use console.table instead of console.log
console.table(foods);
