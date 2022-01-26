function updateInfo(company, kcal) {
  this.company = company;
  this.kcal = kcal;
}

const pizza = {
  price: 2200,
};

const hamburger = {
  price: 440,
};

const showPriceArrow = () => console.log(this.price);

function showPrice() {
  console.log(this.price);
}

showPriceArrow.call(pizza); // undefined, arrowFunction은 사용할 수 없다.
showPrice.call(pizza);
showPrice.call(hamburger);

updateInfo.call(pizza, "domino", 1800);
console.log(pizza);

updateInfo.apply(hamburger, ["kfc", 700]); // use an array
console.log(hamburger);

const updatePizza = updateInfo.bind(pizza); // Binding대상이 항상 pizza임
updatePizza("pizzahut", 2100);
console.log(pizza);
