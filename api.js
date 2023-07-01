const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__gb));

// Route for the home page
app.get('/', (req, res) => {
  res.sendFile(__gb + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
