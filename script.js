const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Ensure elements exist before adding event listeners
if (registerLink && loginLink && btnPopup && iconClose && wrapper) {
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });
}

// Event listener for login form submission
const loginForm = document.querySelector('.form-box.login form');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Retrieve stored credentials from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (email === storedEmail && password === storedPassword) {
            // Redirect to the homepage
            window.location.href = 'homepage.html';
        } else {
            // Show an error message
            alert('Invalid email or password');
        }
    });
}

// Event listener for registration form submission
const registerForm = document.querySelector('.form-box.register form');
if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = registerForm.querySelector('input[type="text"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

        // Store credentials in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Show success message and redirect to login form
        alert('Registration successful! Please log in.');
        wrapper.classList.remove('active');
    });
}

// Ensure ion-icon library is loaded correctly (no direct JS fix but check HTML)
document.addEventListener('DOMContentLoaded', () => {
    const scriptModule = document.createElement('script');
    scriptModule.type = 'module';
    scriptModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.head.appendChild(scriptModule);

    const scriptNoModule = document.createElement('script');
    scriptNoModule.nomodule = true;
    scriptNoModule.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    document.head.appendChild(scriptNoModule);
});
