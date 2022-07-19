const whatIsThis = () => this;
console.log(whatIsThis());

const thisTest = (arg) => console.log(arg, this);
thisTest("Test");

const customThis = {
  message: "Hi, I'm from customThis",
};
thisTest.call(customThis, "Test");
thisTest.apply(customThis, ["Test"]);

const thisTestFunc = thisTest.bind(customThis, "Test");
thisTestFunc();
