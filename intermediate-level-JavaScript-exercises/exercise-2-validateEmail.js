function validateEmail() {
    const emailInput = document.getElementById('emailInput').value; // Get input value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for email validation

    if (emailPattern.test(emailInput)) {
        document.getElementById('result').textContent = 'Valid email address.';
    } else {
        document.getElementById('result').textContent = 'Invalid email address. Please enter a valid email.';
    }
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the button
    document.getElementById('validateButton').addEventListener('click', validateEmail);
});
