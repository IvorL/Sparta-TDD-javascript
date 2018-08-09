function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}

function divideTwoNumbers(num1, num2) {
  return num1 / num2;
}

function power(num1, num2) {
  return num1 ** num2;
}

function sqrt(num1) {
  return num1 ** 0.5;
}

function BMICalulator(user_height, user_weight) {
  result = user_weight/user_height;
  return result/user_height;
}

function calculateTravelTime(user_distance, user_speed) {
  return user_distance/user_speed;
}

function calculateTravelCost(user_cost_per_gallon, user_fuel_efficiency, user_distance) {
  return ((user_cost_per_gallon/user_fuel_efficiency)*user_distance);
}

module.exports = {
  addTwoNumbers: addTwoNumbers,
  subtractTwoNumbers: subtractTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  multiplyTwoNumbers: multiplyTwoNumbers,
  power: power,
  sqrt: sqrt,
  BMICalulator: BMICalulator,
  calculateTravelTime: calculateTravelTime,
  calculateTravelCost: calculateTravelCost
}
