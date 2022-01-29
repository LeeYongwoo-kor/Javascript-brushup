const pr1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("No1 is READY!"), 2000);
  });
const pr2 = (msg = "Empty Parameter2") => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("No2 is READY!"), 1000);
  });
};
const pr3 = (msg = "Empty Parameter3") => {
  console.log(msg);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("No3 is READY!"), 3000);
  });
};

const order = async () => {
  console.log("=== START ===");
  try {
    const result1 = await pr1();
    const result2 = await pr2(result1);
    const result3 = await pr3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e); // catch
  }
  console.log("=== END ==="); // finally
};
order();

// useful Promise APIs, Promise.all이 조금 더 빠름
const allOrder = async () => {
  return Promise.all([pr1(), pr2(), pr3()]).then((res) => console.log(res));
};
allOrder();
