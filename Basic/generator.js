// Generator: 함수의 실행을 중간에 멈췄다가 재개할 수 있다
// next(), return(), throw()
// Generator는 값을 미리 메모리에 만들어두지 않는다.

/*
fetch("http://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((post) => post.title)
  .then((x) => console.log("Title!", x));
*/
import fetch from "node-fetch";

run(function* () {
  const uri = "http://jsonplaceholder.typicode.com/posts/1";
  const response = yield fetch(uri);
  const post = yield response.json();
  const title = post.title;
  console.log("Title:", title);
});

function run(generator) {
  const iterator = generator();
  console.log(iterator.next());
}
