document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            // Create a checkbox to mark the task as complete
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            checkbox.addEventListener("change", function () {
                if (this.checked) {
                    listItem.style.textDecoration = "line-through";
                } else {
                    listItem.style.textDecoration = "none";
                }
            });

            // Append checkbox to list item and then to the task list
            listItem.prepend(checkbox);
            taskList.appendChild(listItem);

            // Clear the input field
            taskInput.value = "";
        }
    });
});