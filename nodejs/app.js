const express = require('express');
require('dotenv').config();
const app = express();

app.get('/nodejs', (req, res) => {
  res.send('Hello, World from Node.js API!');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
