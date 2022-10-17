// @ts-check
// npm install node-fetch
import fetch from "node-fetch";

/**
 * getData
 * @param {"users"|"todos"|"albums"} resource
 * @param {number} id
 * @returns {Promise} jsonData
 */
async function getData(resource, id) {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}/${id}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// data reference -> data reference
(async function () {
  console.time("timer1");

  const todo = await getData("todos", 50);
  const userId = todo?.userId;
  getData("users", userId)
    .then((user) => console.log(user))
    .catch((err) => console.error(err));

  console.timeEnd("timer1");
})();

// Not good Code...
(async function () {
  console.time("timer2");

  try {
    const todo = await getData("todos", 20);
    const album = await getData("albums", 30);

    console.log([todo, album]);
  } catch (err) {
    console.error(err);
  }

  console.timeEnd("timer2");
})();

// Good Code! asynchronously
(async function () {
  console.time("timer3");

  await Promise.all([getData("todos", 30), getData("albums", 20)])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  console.timeEnd("timer3");
})();
