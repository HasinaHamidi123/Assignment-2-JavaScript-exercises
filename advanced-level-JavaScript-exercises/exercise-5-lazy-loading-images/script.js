document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.querySelector(".image-container");

    // Create a function to load images
    function loadImages() {
        for (let i = 1; i <= 10; i++) {
            const img = document.createElement("img");
            img.dataset.src = `https://picsum.photos/600/400?random=${i}`; // Lazy load image
            img.alt = "Lorem Picsum Image";
            imageContainer.appendChild(img);
        }

        const options = {
            root: null, // Use the viewport as the root
            rootMargin: "0px",
            threshold: 0.1 // Trigger when 10% of the image is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Load the image
                    img.classList.add("loaded");
                    observer.unobserve(img); // Stop observing once loaded
                }
            });
        }, options);

        const images = document.querySelectorAll("img");
        images.forEach(image => {
            observer.observe(image); // Start observing each image
        });
    }

    // Load images when the page loads
    loadImages();
});