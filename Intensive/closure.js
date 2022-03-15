let poison = 3;

const add1 = (a, b) => a + b;

const add2 = (a, b) => a + b + poison; // closure function

console.log(add1(3, 4));
console.log(add2(3, 4));

function init() {
  let name = "LEE";
  function displayName() {
    // closure function
    console.log(name);
  }
  displayName();
}
init();
