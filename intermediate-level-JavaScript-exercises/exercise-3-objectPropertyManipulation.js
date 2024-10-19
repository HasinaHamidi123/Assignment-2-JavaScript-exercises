// Create an object with initial properties
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// Function to display the object properties
function displayProperties() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<pre>${JSON.stringify(person, null, 2)}</pre>`;
}

// Display initial properties
displayProperties();

// Function to add a new property
function addProperty() {
    const key = prompt("Enter property name to add:");
    const value = prompt("Enter property value:");
    person[key] = value;
    displayProperties();
}

// Function to update an existing property
function updateProperty() {
    const key = prompt("Enter property name to update:");
    if (key in person) {
        const value = prompt("Enter new value:");
        person[key] = value;
        displayProperties();
    } else {
        alert("Property does not exist.");
    }
}

// Function to remove a property
function removeProperty() {
    const key = prompt("Enter property name to remove:");
    if (key in person) {
        delete person[key];
        displayProperties();
    } else {
        alert("Property does not exist.");
    }
}