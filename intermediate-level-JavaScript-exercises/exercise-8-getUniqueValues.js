function getUniqueValues(array) {
    return [...new Set(array)];
}

// Function to prompt for input array and display unique values
function getInput() {
    const input = prompt("Enter an array of values (e.g., [1, 2, 2, 3, 4, 4, 5]):");
    let inputArray;

    try {
        inputArray = JSON.parse(input);
    } catch (error) {
        alert("Invalid input! Please enter a valid array format.");
        return [];
    }

    if (Array.isArray(inputArray)) {
        return getUniqueValues(inputArray);
    } else {
        alert("Please enter a valid array.");
        return [];
    }
}

// Display the result in the output element
window.onload = function() {
    const uniqueValues = getInput();
    const outputElement = document.getElementById('output');
    outputElement.textContent = JSON.stringify(uniqueValues);
};