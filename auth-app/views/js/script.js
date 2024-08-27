document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            try {
                const res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert('Registration successful!');
                    window.location.href = '/views/login.html';
                } else {
                    alert(data.msg || 'Error registering user');
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            try {
                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert('Login successful!');
                    localStorage.setItem('token', data.token);
                    window.location.href = 'starter-page.html';
                } else {
                    alert(data.msg || 'Invalid credentials');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});
