document.getElementById("randomButton").addEventListener("click", function() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById("result").textContent = "Please enter a valid range (Min < Max).";
    } else {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("result").textContent = "Random Number: " + randomNum;
    }
});