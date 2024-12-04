// Create a "back to top" button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = 'Top';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};