async function registerUser() {
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, name, rollNumber, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Store user details in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('rollNumber', rollNumber);
  
        alert('Registration successful!');
        window.location.href = result.redirectTo;
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  }
  
  async function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Store user details in sessionStorage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('name', result.name);
        sessionStorage.setItem('rollNumber', result.rollNumber);
  
        alert('Login successful!');
        window.location.href = result.redirectTo;
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  }
  