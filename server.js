const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const referer = req.headers.referer || 'Unknown';
  console.log("hdad")
  res.send(`Referrer: ${referer}`);
});

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
