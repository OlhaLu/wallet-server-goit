require('./core/express-promise');
const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const mongoose = require('mongoose');
const costsController = require('./controllers/contr-costs');
const port = 8000;

const app = express();
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/test?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`server is listening on ${port}`));

app.post('/costs', costsController.create);
app.get('/costs', costsController.all);
app.get('/costs/:id', costsController.findById);
app.put('/costs/:id', costsController.update);
app.delete('/costs/:id', costsController.delete);


const connectDB = async () => {
try {
  await mongoose.connect(db);
  console.log('Mongo DB connected ...');
} catch (err) {
  console.error('something bad happened', err);
}
}
module.exports = connectDB;


// db.connect(urlMongodb, { useNewUrlParser: true,  useUnifiedTopology: true }, function(err) {
//     if (err) {
      // return console.log('something bad happened', err)
//     }
//     app.listen(port, () => {
      // console.log('server is listening on ' + port);
//     })
// })