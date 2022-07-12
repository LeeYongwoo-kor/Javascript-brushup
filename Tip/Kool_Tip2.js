// https://leonkong.cc/posts/11-useful-js-tips.html
// 1. !! Operator
function Account(cash) {
  this.cash = cash;
  this.hasMoney = !!cash;
}

const account = new Account(100);
console.log(account.cash, account.hasMoney);

const emptyAccount = new Account(0);
console.log(account.cash, account.hasMoney);

// 2. + Operator
function toNumber(strNumber) {
  return +strNumber;
}

console.log(toNumber("1234")); // 1234
console.log(toNumber("ABCD")); // NaN

// 3. && Operator
const login = () => console.log("Logined!!");
let connected = true;

if (connected) {
  login();
}
// ->
if (connected && login()) {
  console.log("Yes! Yes!");
}

// 4. || Operator
function User(name, age) {
  this.name = name || "Abe";
  this.age = age || 80;
}

const user1 = new User();
console.log(user1.name, user1.age);

// 5. Array Truncating
const leeArr = [10, 100, 1000, 10000];

leeArr.length = 2;
console.log(leeArr);
