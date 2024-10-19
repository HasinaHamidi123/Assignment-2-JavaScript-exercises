// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Event listener for the button click
document.getElementById('convert').addEventListener('click', function() {
    const celsiusInput = parseFloat(document.getElementById('celsius').value);

    if (!isNaN(celsiusInput)) {
        // Get the result from the function
        const fahrenheit = convertCelsiusToFahrenheit(celsiusInput);
        // Display the result in the HTML
        document.getElementById('result').innerText = `${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid number.';
    }
});