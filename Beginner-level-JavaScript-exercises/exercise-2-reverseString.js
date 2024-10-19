// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Event listener for the button click
document.getElementById('reverseButton').addEventListener('click', function() {
    const inputStr = document.getElementById('inputString').value;
    const reversedStr = reverseString(inputStr);
    document.getElementById('result').innerText = `Reversed String: ${reversedStr}`;
});