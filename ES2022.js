// npm install node-fetch
import fetch from "node-fetch";

// top level await
const getTodos = async (number) => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  const json = await (
    await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
  ).json();
  console.log(json);
};

const atWhat = [(1, 2, 3, 4)].at(-1);
console.log(atWhat);

const err = new Error("Can't save comment", { cause: "Not allowed." });

console.log(err.message);
console.log(err.cause);
