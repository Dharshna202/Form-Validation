const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple email validation using regex
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (!name || !emailPattern.test(email) || !phone || !message) {
        event.preventDefault();
        alert('Please fill in all fields correctly!');
    }
});
