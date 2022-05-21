const express = require('express');

const PORT = 3000 | process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Friend !');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
