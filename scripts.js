// Toggle between Login and Sign-Up forms
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');
const toggleSignup = document.getElementById('toggle-signup');
const toggleLogin = document.getElementById('toggle-login');
const formTitle = document.getElementById('form-title');

toggleSignup.addEventListener('click', function(e) {
  e.preventDefault();
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  formTitle.textContent = 'Sign Up';
});

toggleLogin.addEventListener('click', function(e) {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  formTitle.textContent = 'Login';
});