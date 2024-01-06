
// index.js
function generateNavbar() {
    // ... (your existing code remains unchanged)

    document.addEventListener("DOMContentLoaded", function () {
        // Get all navigation links
        const navLinks = document.querySelectorAll('.navbar ul li a');

        // Attach click event listeners to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                console.log(`Clicked on : ${link.textContent}`);
                // Check which link was clicked and open the corresponding HTML file
                if (link.getAttribute('href') === 'supportindex.html') {
                    window.location.href = 'supportindex.html';
                } else if (link.getAttribute('href') === 'aboutusindex.html') {
                    window.location.href = 'aboutusindex.html';
                }
                // Add more conditions for other links if needed
            });
        });
    });

    // ... (your existing code remains unchanged)
}

function showAlert() {
    alert("Thank you for getting involved!");
}
// Get the button element
var getInvolvedButton = document.querySelector('.section1-button');
// Add a click event listener to the button
getInvolvedButton.addEventListener('click', showAlert);