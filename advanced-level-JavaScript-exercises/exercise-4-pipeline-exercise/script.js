// Define some basic functions to use in the pipeline
const addFive = (x) => x + 5;
const multiplyByThree = (x) => x * 3;
const subtractTwo = (x) => x - 2;

// Function pipeline implementation
function functionPipeline(...functions) {
    return function (initialValue) {
        return functions.reduce((acc, func) => func(acc), initialValue);
    };
}

// Compose the functions into a pipeline
const pipeline = functionPipeline(addFive, multiplyByThree, subtractTwo);

// Add an event listener to the button to trigger the pipeline
document.getElementById("runPipeline").addEventListener("click", function() {
    // Get the user's input value
    const userInput = parseFloat(document.getElementById("userInput").value);

    // Make sure the input is a valid number
    if (isNaN(userInput)) {
        alert("Please enter a valid number");
        return;
    }

    // Call the pipeline with the user's input and display the result
    const result = pipeline(userInput);  // Run the function pipeline
    document.getElementById("resultOutput").textContent = result;  // Display the result on the page
});