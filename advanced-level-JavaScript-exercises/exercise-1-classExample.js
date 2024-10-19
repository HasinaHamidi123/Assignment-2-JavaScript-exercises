let page = 1;
let itemsPerPage; // To store the number of items per page
const items = [];
const itemContainer = document.getElementById('item-container');
const loadingIndicator = document.getElementById('loading-indicator');

// Ask user for the number of items to load
function askForItemsPerPage() {
    itemsPerPage = parseInt(prompt("Enter the number of items to load per scroll:", "10"));
    if (isNaN(itemsPerPage) || itemsPerPage <= 0) {
        alert("Please enter a valid number greater than 0.");
        askForItemsPerPage(); // Ask again if the input is invalid
    } else {
        loadItems(); // Load items based on user input
    }
}

// Function to create and append items to the container
function loadItems() {
    loadingIndicator.style.display = 'block'; // Show loading indicator

    setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Prevent loading more items than needed
        if (start < 100) { // assuming a total of 100 items for demonstration
            for (let i = start; i < end && i < 100; i++) {
                items.push(`Item ${i + 1}`);
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerText = `Item ${i + 1}`;
                itemContainer.appendChild(itemDiv);
            }
            page++;
        }
        loadingIndicator.style.display = 'none'; // Hide loading indicator
    }, 1000); // Simulating network delay
}

// Intersection Observer for infinite scroll
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        loadItems();
    }
});

// Start observing the loading indicator
observer.observe(loadingIndicator);

// Start asking for the number of items per page
askForItemsPerPage();