// registration.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get user input
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const rollNumber = document.getElementById('rollNumber').value;

  // Store user data in sessionStorage
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('name', name);
  sessionStorage.setItem('rollNumber', rollNumber);

  // Redirect to the dashboard after registration
  window.location.href = 'dashboard.html';
});
