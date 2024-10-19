// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Clean the string
    const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string
    return cleanedStr === reversedStr; // Compare
}

// Event listener for the button click
document.getElementById('checkPalindrome').addEventListener('click', function() {
    const inputString = document.getElementById('stringInput').value;

    // Get the result from the function
    const result = isPalindrome(inputString);
    // Display the result in the HTML
    document.getElementById('result').innerText = result
        ? `"${inputString}" is a palindrome.`
        : `"${inputString}" is not a palindrome.`;
});