// Throttling function to limit the rate of execution
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}

// Function to execute on button click
function logMessage() {
    const timestamp = new Date().toLocaleTimeString();
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML += `Button clicked at: ${timestamp}<br>`;
}

// Create a throttled version of the logMessage function
const throttledLogMessage = throttle(logMessage, 2000);

// Attach the throttled function to the button's click event
const button = document.getElementById('throttleButton');
button.addEventListener('click', throttledLogMessage);