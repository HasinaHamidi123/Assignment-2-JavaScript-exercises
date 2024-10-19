function generateFibonacci(n) {
    const fibonacci = [0, 1];

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return fibonacci.slice(0, n); // Return only the first n Fibonacci numbers
}

// Function to prompt for input and display the result
function getInput() {
    let n = parseInt(prompt("Enter the number of Fibonacci numbers to generate:"), 10);

    while (isNaN(n) || n <= 0) {
        n = parseInt(prompt("Please enter a valid positive integer:"), 10);
    }

    const fibonacciNumbers = generateFibonacci(n);
    return `The first ${n} Fibonacci numbers are: ${fibonacciNumbers.join(", ")}.`;
}

// Display the result in the output element
window.onload = function() {
    const result = getInput();
    const outputElement = document.getElementById('output');
    outputElement.textContent = result;
};