document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginSection = document.getElementById('login');
    const portalSection = document.getElementById('portal');
    const employeeNameSpan = document.getElementById('employee-name');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Fake authentication logic
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would authenticate with a server
        if (username === 'employee' && password === 'password') {
            loginSection.classList.add('hidden');
            portalSection.classList.remove('hidden');
            employeeNameSpan.textContent = username;
        } else {
            alert('Invalid credentials');
        }
    });
});
