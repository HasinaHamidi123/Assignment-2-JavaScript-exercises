// Function to calculate the sum of two numbers
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}

// Event listener for the button click
document.getElementById('calculate').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('num1').value);
    const number2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(number1) && !isNaN(number2)) {
        // Get the result from the function
        const result = sumOfTwoNumbers(number1, number2);
        // Display the result in the HTML
        document.getElementById('result').innerText = `The sum of ${number1} and ${number2} is: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
});