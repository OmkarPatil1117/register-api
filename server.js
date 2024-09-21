const express = require('express');
const app = express();

// Define the login route
app.get('/login', (req, res) => {
  res.send('Hi from login');
});

// Define the port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
