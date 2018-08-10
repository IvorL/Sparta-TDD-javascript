// Input prompts for two numbers and an operator
function mathOp(num1, op, num2) {
  switch (op) {
    case '+':
        return addTwoNumbers(num1, num2);
    case '-':
        return subtractTwoNumbers(num1, num2);
    case '*':
        return multiplyTwoNumbers(num1, num2);
    case '/':
        return divideTwoNumbers(num1, num2);
    case '**':
        return power(num1, num2);
    case 'sqrt':
        return sqrt(num1);
    default:
        return 'Could not recognise input';
  }
}

function userCalculation() {
  var num1 = parseFloat(prompt('Enter a number: '));
  var op = prompt('Enter an operator (enter "**" or "sqrt" for power )');
  if (op != 'sqrt') {
    var num2 = parseFloat(prompt('Enter another number'));
  }

   return alert(mathOp(num1, op, num2));
}

// BMI Calculator
// Ask user for their preferred unit system
function calculateUserBMI() {

  var user_choice = prompt('Enter (m) for metric system or (i) for imperial');
  if (user_choice == 'm') {
    var user_height_metres = parseFloat(prompt('Enter your height in meters'));
    var user_weight_kg = parseFloat(prompt('Enter your weight in kg'));
  }

  else if (user_choice == 'i') {
    var user_height_ft = parseFloat(prompt('Enter your height in feet: )'));
    var user_height_inches = parseFloat(prompt('Enter your height in inches: )'));
    var user_weight_lbs = parseFloat(prompt('Enter your weight in pounds'));

    // convert imperial to metric units for the BMI calculator
    var user_height_metres = ((user_height_ft) + (user_height_inches/12))*0.3048;
    var user_weight_kg = user_weight_lbs/2.2;
    }

    return BMICalulator(user_height_metres, user_weight_kg);
}

// Trip Calculator
function calculateTripTimeAndDistance() {
  var user_distance = parseFloat(prompt('Enter distance in miles'));
  var user_fuel_efficiency = parseFloat(prompt('Enter your fuel efficiency in mpg'));
  var user_cost_per_gallon = parseFloat(prompt('Enter fuel cost per gallon'));
  var user_speed = parseInt(prompt('Enter average speed'));

  var time = calculateTravelTime(user_distance, user_speed);

  // If the user's speed is greater than 60mph
  // remove 2mpg from their fuel efficiency per 1mph over 60mph
  if (user_speed > 60) {
    user_fuel_efficiency -= ((user_speed - 60)*2);
    if (user_fuel_efficiency < 10)
      user_fuel_efficiency = 10;
  }

  var cost = calculateTravelCost(user_cost_per_gallon, user_fuel_efficiency, user_distance);

  alert('Your trip will take ' + cost.toFixed(2) + ' hours and cost £ ' + time.toFixed(2));
}

function userCalcChoice() {
  var calcChoice = prompt("Enter (1) for a numerical calculator, (2) for a BMI calculator or (3) for a trip calculator");

  if (calcChoice == '1')
    userCalculation();
  else if (calcChoice == '2')
    calculateUserBMI();
  else if (calcChoice == '3')
    calculateTripTimeAndDistance();
}

userCalcChoice();
