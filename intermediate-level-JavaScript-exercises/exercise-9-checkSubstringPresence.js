function checkSubstring(mainString, substring) {
    return mainString.includes(substring);
}

// Function to prompt for input strings and display the result
function getInput() {
    const mainString = prompt("Enter the main string:");
    const substring = prompt("Enter the substring to check:");

    const isSubstring = checkSubstring(mainString, substring);

    return isSubstring ? `"${substring}" is a substring of "${mainString}".` : `"${substring}" is NOT a substring of "${mainString}".`;
}

// Display the result in the output element
window.onload = function() {
    const result = getInput();
    const outputElement = document.getElementById('output');
    outputElement.textContent = result;
};