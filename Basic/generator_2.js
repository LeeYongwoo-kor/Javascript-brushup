function* generatorFunction() {
  console.log("This will be executed first.");
  yield "Hello, ";

  console.log("I will be printed after the pause");
  yield "World!";
}

const generatorObject = generatorFunction();

console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// Generator 오브젝트는 오직 한 번만 접근이 가능하다.
