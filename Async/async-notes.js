import fetch from "node-fetch";
// npm install node-fetch

async function getTodo(todoId) {
  try {
    const todoRes = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const todo = await todoRes.json();
    return todo;
  } catch (err) {
    console.err(err);
  }
}

async function getUser(userId) {
  try {
    const userRes = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const user = await userRes.json();
    return user;
  } catch (err) {
    console.err(err);
  }
}

async function getAlbum(albumId) {
  try {
    const albumRes = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${albumId}`
    );
    const album = await albumRes.json();
    return album;
  } catch (err) {
    console.err(err);
  }
}

// data reference -> data reference
(async function () {
  console.time("timer");

  const todo = await getTodo(50);
  const userId = todo?.userId;
  getUser(userId)
    .then((user) => console.log(user))
    .catch((err) => console.err(err));

  console.timeEnd("timer");
})();
