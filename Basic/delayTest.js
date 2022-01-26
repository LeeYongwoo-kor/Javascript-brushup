setTimeout(() => console.log("first?"), 0);
console.log("second?");
// second? -> first?
// Browers는 기본적으로 4ms의 인터벌이 있다.

let num = 1;
const tId = setInterval(() => {
  console.log(`This Time is ${num++}`);
  if (num >= 5) clearInterval(tId);
}, 1000);
// Interval은 milliseconds만큼 반복수행! clearInterval을 쓰면 함수중단
