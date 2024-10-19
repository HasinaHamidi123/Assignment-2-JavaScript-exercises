function removeDuplicates() {
    // Get the input value and split it into an array
    const input = document.getElementById("arrayInput").value;

    // Check if the input is not empty
    if (!input) {
        document.getElementById("result").innerText = "Please enter values.";
        return;
    }

    // Split input into an array and remove whitespace
    const array = input.split(",").map(item => item.trim());

    // Remove duplicates using Set
    const uniqueArray = Array.from(new Set(array));

    // Display the result
    document.getElementById("result").innerText = uniqueArray.join(", ");
}