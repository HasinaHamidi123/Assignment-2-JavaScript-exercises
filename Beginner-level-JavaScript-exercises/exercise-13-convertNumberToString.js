function convertToString() {
    // Get the input value
    const number = document.getElementById("numberInput").value;

    // Convert the number to a string
    const stringRepresentation = String(number); // Or use number.toString()

    // Display the result with quotes to indicate it's a string
    document.getElementById("result").innerText = `"${stringRepresentation}"`; // Shows "12"
}