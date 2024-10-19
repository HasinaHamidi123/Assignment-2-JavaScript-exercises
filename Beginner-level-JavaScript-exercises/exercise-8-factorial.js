document.getElementById("calculateFactorial").addEventListener("click", function() {
    const number = parseInt(document.getElementById("numberInput").value);
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById("result").textContent = `Factorial of ${number} is ${factorial}`;
});