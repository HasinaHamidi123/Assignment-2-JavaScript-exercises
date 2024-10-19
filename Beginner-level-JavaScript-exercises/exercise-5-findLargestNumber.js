// Function to find the largest number in an array
function findLargestNumber(numbers) {
    return Math.max(...numbers);
}

// Event listener for the button click
document.getElementById('findLargest').addEventListener('click', function() {
    const input = document.getElementById('numbers').value;
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    // Check if the array has valid numbers
    if (numberArray.every(num => !isNaN(num))) {
        // Get the result from the function
        const largest = findLargestNumber(numberArray);
        // Display the result in the HTML
        document.getElementById('result').innerText = `The largest number is: ${largest}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    }
});