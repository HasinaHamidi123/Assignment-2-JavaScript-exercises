document.getElementById("sumButton").addEventListener("click", function() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(",").map(Number);
    const sum = array.reduce((acc, val) => acc + val, 0);

    document.getElementById("result").textContent = "Sum: " + sum;
});