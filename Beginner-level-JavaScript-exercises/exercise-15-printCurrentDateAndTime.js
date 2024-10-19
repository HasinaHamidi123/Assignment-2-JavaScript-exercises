document.getElementById("dateTimeButton").addEventListener("click", function() {
    const currentDateTime = new Date();
    const formattedDateTime = currentDateTime.toLocaleString(); // Format date and time

    document.getElementById("result").textContent = "Current Date and Time: " + formattedDateTime;
});