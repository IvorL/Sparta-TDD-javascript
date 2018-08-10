describe("Intro to doing TDD in javascript", function() {
  var calculator = require("../Calculator/calcFunctions.js");

  it("should add two numbers together", function() {
    expect(calculator.addTwoNumbers(3,2)).toEqual(5);
  })

  it("should subtract two numbers", function() {
    expect(calculator.subtractTwoNumbers(3, 2)).toEqual(1);
  })

  it("should multiply two numbers", function() {
    expect(calculator.multiplyTwoNumbers(3, 2)).toEqual(6);
  })

  it("should subtract two numbers", function() {
    expect(calculator.divideTwoNumbers(4, 2)).toEqual(2);
  })

  it("should perform a power operation", function() {
    expect(calculator.power(4, 2)).toEqual(16);
  })

  it("should square root a number", function() {
    expect(calculator.sqrt(4)).toEqual(2);
  })

  it("should return the users BMI", function() {
    expect(calculator.BMICalulator(2, 80)).toEqual(20);
  })

  it("should return the travel time", function() {
    expect(calculator.calculateTravelTime(100, 40)).toEqual(2.5);
  })

  it("should return the travel cost", function() {
    expect(calculator.calculateTravelCost(5, 40, 10)).toEqual(1.25);
  })

})
