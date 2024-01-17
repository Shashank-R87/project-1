const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 8080;

// Enable CORS for all routes
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory store for registered users
const registeredUsers = [];

// Registration route
app.post('/register', (req, res) => {
  const { username, name, rollNumber, password } = req.body;

  // Check if the username is already taken
  if (registeredUsers.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already taken' });
  }

  // Add the user to the in-memory store
  const newUser = { username, name, rollNumber, password };
  registeredUsers.push(newUser);

  // For testing purposes, just sending a success message
  res.json({ message: 'Registration successful', redirectTo: 'http://localhost:8080/dashboard.html' });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists in the in-memory store
  const user = registeredUsers.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', redirectTo: 'http://localhost:8080/dashboard.html' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

