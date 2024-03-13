/** The Basic Calculator */


/** Lets bake down what we need to do to make the calculator work:
 * 1. Prompt the user to enter the first number.
 * 2. Prompt the user to enter the second number.
 * 3. Prompt the user to enter the operation to perform (+, -, *, /).
 * 4. Call the function to perform the calculation.
 * 5. Display the result in an alert box.
 * 6. Test the calculator by performing multiple calculations.
 */


// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch(operation) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if(y !== 0) return x / y;
            else return "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

function startCalculator() {
    // COLLECT FIRST NUMBER FROM USER
    let number1 = parseFloat(prompt("Enter the first number:"));

    // COLLECT SECOND NUMBER FROM USER
    let number2 = parseFloat(prompt("Enter the second number:"));
    let operation; // Variable to hold the operation
    let result; // Variable to hold the calculation result
    
    do {
        // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
        operation = prompt("What operation would you like to perform? (add, subtract, multiply, divide)");

        // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
        result = calculate(number1, number2, operation);
        if(result === "Invalid operation") {
            alert("Please enter a valid operation.");
        }
    } while(result === "Invalid operation");

    alert("Result: " + result);
}

startCalculator();