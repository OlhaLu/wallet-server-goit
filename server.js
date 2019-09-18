require('./core/express-promise');
const express = require('express');
const morgan = require('morgan');

const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const mongoose = require('mongoose');
const costsController = require('./controllers/contr-costs');
const port = 8000;

const app = express();
app.use(morgan('combined'));

app.use(express.json({
  extended: true,
  inflate: true,
  limit: '100kb',
  parameterLimit: 1000,
  type: 'application/json',
  verify: undefined
}));

app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server is listening on ${port}`));


app.use("/", function(req, res){
  res.send(req.body)
});

app.post('/costs', costsController.create);
app.get('/costs', costsController.find);
app.get('/costs/:id', costsController.findById);
app.put('/costs/:id', costsController.update);
app.delete('/costs/:id', costsController.remove);


const connectDB = async () => {
try {
  await mongoose.createConnection();
  console.log('Mongo DB connected ...');
} catch (err) {
  console.error('something bad happened', err);
}
}
connectDB();