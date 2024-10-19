function sortArray() {
    const input = document.getElementById('numberInput').value; // Get input value
    const numbers = input.split(',').map(num => Number(num.trim())); // Split input and convert to numbers

    // Check if the input is valid (all numbers)
    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const sortedNumbers = numbers.sort((a, b) => a - b); // Sort the numbers
    document.getElementById('result').textContent = `Sorted Numbers: ${sortedNumbers.join(', ')}`; // Display the result
}