function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}

// Function to prompt for nested array input
function getInput() {
    const input = prompt("Enter a nested array (e.g., [[1, 2, [3]], [4, [5, 6]], 7]):");
    let nestedArray;

    try {
        nestedArray = JSON.parse(input);
    } catch (error) {
        alert("Invalid input! Please enter a valid nested array format.");
        return [];
    }

    if (Array.isArray(nestedArray)) {
        return flattenArray(nestedArray);
    } else {
        alert("Please enter a valid nested array.");
        return [];
    }
}

// Display the result in the output element
window.onload = function() {
    const flattenedArray = getInput();
    const outputElement = document.getElementById('output');
    outputElement.textContent = JSON.stringify(flattenedArray);
};