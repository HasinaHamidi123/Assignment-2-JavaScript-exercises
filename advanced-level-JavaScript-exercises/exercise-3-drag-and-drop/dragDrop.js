// Allow the drop by preventing the default behavior
function allowDrop(event) {
    event.preventDefault();
}

// Function to capture the ID of the draggable item
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Function to handle the drop event
function drop(event) {
    event.preventDefault(); // Prevent the default drop behavior

    // Get the ID of the draggable item
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);

    // Remove "Empty Box" text if the box was initially empty
    const dropContainer = document.getElementById('dropContainer');
    const placeholder = dropContainer.querySelector('.placeholder');
    if (placeholder) {
        dropContainer.removeChild(placeholder);
    }

    // Append the dragged element to the drop area
    dropContainer.appendChild(draggedElement);
}