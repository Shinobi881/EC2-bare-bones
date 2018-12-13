const express = require('express');

const PORT = 80;
const app = express();

app.use('*', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
