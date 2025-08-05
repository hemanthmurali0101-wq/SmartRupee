const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: Main route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Your Website</h1><a href="/newpage.html">Go to new page</a>');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
