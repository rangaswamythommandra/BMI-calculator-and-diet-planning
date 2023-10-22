// script.js

function openPage(page) {
    window.location.href = page;
}
// JavaScript code goes here

// Get all grid items and add a click event listener to them
const gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Navigate to the linked URL when a grid item is clicked
        const link = item.querySelector("a");
        if (link) {
            window.location.href = link.href;
        }
    });
});

// Add a hover effect to the grid items
gridItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1.0)";
    });
});

