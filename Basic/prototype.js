function Person(name, age, alive) {
  this.name = name;
  this.age = age;
  this.alive = alive;
}

Person.prototype.print = function () {
  return `Name: ${this.name}, Age: ${this.age}, Alive: ${this.alive}`;
};

/*
<- SAME ->
class Person {
    constructor(name, age, alive) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }
    print() { return `Name: ${this.name}, Age: ${this.age}, Alive: ${this.alive}`; }
}
*/

const lee = new Person("Lee", 80, true);

console.log(lee.hasOwnProperty("name"));
console.dir(Person.prototype);
console.log(lee.print());
