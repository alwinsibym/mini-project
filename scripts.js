document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', (event) => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === '' || password === '') {
          alert('Please fill in all fields.');
          event.preventDefault();
      }
  });
});
