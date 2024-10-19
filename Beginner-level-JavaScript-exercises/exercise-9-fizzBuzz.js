document.getElementById("fizzBuzzButton").addEventListener("click", function() {
    const upperLimit = parseInt(document.getElementById("upperLimit").value);
    let result = "";

    if (isNaN(upperLimit) || upperLimit < 1) {
        result = "Please enter a valid number greater than 0.";
    } else {
        for (let i = 1; i <= upperLimit; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result += "FizzBuzz\n";
            } else if (i % 3 === 0) {
                result += "Fizz\n";
            } else if (i % 5 === 0) {
                result += "Buzz\n";
            } else {
                result += i + "\n";
            }
        }
    }

    document.getElementById("result").textContent = result;
});