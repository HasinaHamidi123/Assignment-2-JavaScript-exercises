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

// Add a new property
person.city = "New York";
console.log("Added city:", person.city);

// Update an existing property
person.age = 31;
console.log("Updated age:", person.age);

// Remove a property
delete person.occupation;
console.log("Removed occupation:", person.occupation);

// Display updated properties
displayProperties();
