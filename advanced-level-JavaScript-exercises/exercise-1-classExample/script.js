let itemsPerLoad = 10; // Default items per load

// Simulate fetching data from an API
const fetchData = (start, limit) => {
    return new Promise((resolve) => {
        const items = [];
        for (let i = start; i < start + limit; i++) {
            items.push(`Item ${i + 1}`);
        }
        setTimeout(() => resolve(items), 1000); // Simulate network delay
    });
};

// Function to render items to the page
const renderItems = (items) => {
    const contentDiv = document.getElementById("content");
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = item;
        contentDiv.appendChild(div);
    });
};

// Function to load more items when the user scrolls
const loadMoreItems = async () => {
    const loadingDiv = document.getElementById("loading");
    loadingDiv.style.display = "block"; // Show loading indicator

    const start = document.querySelectorAll(".item").length;
    const items = await fetchData(start, itemsPerLoad);
    renderItems(items);
    loadingDiv.style.display = "none"; // Hide loading indicator
};

// Intersection Observer to trigger loading more items
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadMoreItems();
            observer.unobserve(entry.target); // Stop observing after loading
        }
    });
});

// Observe the loading div
observer.observe(document.getElementById("loading"));

// Load initial items
loadMoreItems();

// Add event listener for input change
document.getElementById("setItems").addEventListener("click", () => {
    const input = document.getElementById("itemCount").value;
    itemsPerLoad = Math.max(1, parseInt(input)); // Set items per load based on input
    document.getElementById("content").innerHTML = ""; // Clear existing items
    loadMoreItems(); // Load new items based on the updated input
});