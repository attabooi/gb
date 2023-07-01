const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


