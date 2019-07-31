const express = require('express');
const corsMiddleware = require('cors');

const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.listen(3001, () => {
  console.log('Listening on port 3001');
});