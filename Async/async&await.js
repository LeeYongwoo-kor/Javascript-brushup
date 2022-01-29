const getName = async (name) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(name);
    }, 1000);
  });
// Always return Promise function

getName("Lee").then((res) => console.log(res));

const showName = async () => {
  const result = await getName("Trump");
  // await는 async function에서만 사용할 수 있음
  // await 오른쪽은 Promise가 오고, Promise가 처리될때까지 기다림!(await)
  console.log(result);
};
