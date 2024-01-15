document.getElementById('usernameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const enteredUsername = document.getElementById('username').value;
  
    // Display the username in the welcome message
    document.getElementById('mainContent').innerHTML = `
      <p>Welcome to your dashboard, ${enteredUsername}!</p>
    `;
  });
  