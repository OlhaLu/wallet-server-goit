const express = require('express');
const app = express();
const allCosts = require('./db/costs/all-costs.json');

const PORT = process.env.PORT || 3001;

app.get('/home', function (req, res, next) {
    res.send('Wellet Home Page')
  })

  app.get('/costs', function(req, res, next) {
    res.status(200).json(allCosts);
  });

app.get('/costs/:id', (req, res) =>{
  let serchCostsId = allCosts.find(costs => {
      return costs.id === Number(req.params.id)
  });
  res.send(serchCostsId);
})

  app.use(function(req, res, next){
      let err = new Error ('not found');
      err.status = 404;
      next(err);
  })

  app.use(function(err, req, res, next){
      res.status(err.status || 500).send({ "status": "no products", error: "products: []" });
      })

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
});
