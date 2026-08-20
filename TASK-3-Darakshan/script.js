// Select the necessary DOM elements
const actionButton = document.getElementById('actionButton');
const statusText = document.getElementById('statusText');
const bodyElement = document.body;

// Add an event listener for user clicks
actionButton.addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    bodyElement.classList.toggle('dark-mode');

    // Dynamically update content based on the state
    if (bodyElement.classList.contains('dark-mode')) {
        statusText.textContent = 'Current Mode: Dark Mode 🌙';
        actionButton.textContent = 'Toggle Light Mode';
    } else {
        statusText.textContent = 'Current Mode: Light Mode ☀️';
        actionButton.textContent = 'Toggle Dark Mode';
    }
});