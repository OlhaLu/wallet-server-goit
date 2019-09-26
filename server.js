require('./core/express-promise');
const express = require('express');
const morgan = require('morgan');
const port = 8000;
const db = require('./db');
const urlMongodb =
  'mongodb+srv://olhalu:12345@clusterolhalu-c3gov.gcp.mongodb.net/wallet?retryWrites=true&w=majority';
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();


app.use(morgan('combined'));

app.use(
  express.json({
    extended: true,
    inflate: true,
    limit: '100kb',
    parameterLimit: 1000,
    type: 'application/json',
    verify: undefined,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server is listening on ${port}`));

app.use('/api', apiRoutes);


db.connect(urlMongodb, function(err) {
  if (err) {
    return console.error('Something bad happened', err);
  } 
  console.log('Mongo DB connected ...');
})
