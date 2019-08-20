const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');
const costsController = require('./controllers/contr-costs');
const port = 3001;

const app = express();
const urlMongodb = 'mongodb+srv://olhalu:<12345>@clusterolhalu-c3gov.gcp.mongodb.net/test?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/costs', costsController.create);
app.get('/costs', costsController.all);
app.get('/costs/:id', costsController.findById);
app.put('/costs/:id', costsController.update);
app.delete('/costs/:id', costsController.delete);

db.connect(urlMongodb, { useNewUrlParser: true }, function(err) {
    // if (err) {
    //   return console.log(err);
    // }
    // app.listen(port, function() {
    //   console.log('Started API app!');
    // };
    
    app.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})
})