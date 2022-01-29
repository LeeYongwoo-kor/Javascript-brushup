const pr = new Promise((resolve, reject) => {
  setTimeout(() => resolve("READY!"), 500);
});
const pr1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("No1 is READY!"), 2000);
  });
const pr2 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("No2 is READY!"), 1000);
  });
};
const pr3 = (msg) => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("No3 is READY!"), 3000);
  });
};

pr.then((result) => console.log(`I'm ${result}`))
  .catch((err) => console.log(`Oh... ${err}`))
  .finally(() => console.log("=== END ==="));

// new Promise(state: pending(대기), result: undefined) ->
//   resolve(state: fulfilled, result: value)
//   reject(state:rejected, result: error)

// Promise Chaining
console.log("=== START ===");
pr1()
  .then((res) => pr2(res))
  .then((res) =>
    pr3(res)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
      .finally(() => console.log("=== END ==="))
  );

// Promise.all: 한꺼번에 시작하고 모두 이행되면 값을 사용할 수 있음
// 주의: 하나라도 reject되면 에러가 발생함
Promise.all([pr1(), pr2(), pr3()]).then((res) => console.log(res));

// Promise.race: 가장 빨리 완료되는것만!
Promise.race([pr1(), pr2(), pr3()]).then((res) => console.log(res));
