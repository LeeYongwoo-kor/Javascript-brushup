const color = ["red", "blue", "green"];

color.push("black");
console.log(...color);
console.log(color);

color.pop();
console.log(color);

color.unshift("white");
console.log(color);

color.shift();
console.log(color);

// 1. Array.at
console.log(color.at(-1));

// 2. Array.concat
const color2 = ["whtie", "black"];
console.log(color.concat(color2));
console.log(...color, ...color2);
console.log(color);
console.log(color2);

// 3. Array.entries
console.log(color.entries().next().value);

for (const [index, element] of color.entries()) {
  console.log(index, element);
}
