// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

// Event listener for the button click
document.getElementById('checkButton').addEventListener('click', function() {
    const number = parseInt(document.getElementById('inputNumber').value, 10);

    if (!isNaN(number)) {
        // Get the result from the function
        const result = checkEvenOrOdd(number);
        // Display the result in the HTML
        document.getElementById('result').innerText = `The number ${number} is: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number.';
    }
});