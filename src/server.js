const express = require('express')
const app = express();
const fs = require('fs');

//шаблон json согласно ТЗ
const products = './costs-mock.json';
// вторичный файл после слияния с датой
const allProducts = './all-costs.json';

// объекты products на добавлениев основной json файл
const productsToAdd = [{
  "id": 19112832,
  "name": "Оплата интернета",
  "description": "",
  "price": "80",
  "currency": "UAN",
  "created": "21-07-2019",
  "modified": "23-07-2019",
  "categories": ["internet"]
  },

 {
  "id": 19112833,
  "name": "Заправка авто",
  "description": "",
  "price": "800",
  "currency": "UAN",
  "created": "21-07-2019",
  "modified": "23-07-2019",
  "categories": ["азс"]
  },

 {
  "id": 19112834,
  "name": "Индивидуальные занятия на ф-но",
  "description": "",
  "price": "450",
  "currency": "UAN",
  "created": "21-07-2019",
  "modified": "23-07-2019",
  "categories": ["music"]
  },

  {
  "id": 19112835,
  "name": "Покупка тура на 2-х",
  "description": "",
  "price": "600",
  "currency": "EUR",
  "created": "21-07-2019",
  "modified": "23-07-2019",
  "categories": ["trip"]
  },

  {
  "id": 19112836,
  "name": "Домашний кинотеатр",
  "description": "",
  "price": "15000",
  "currency": "UAN",
  "created": "21-07-2019",
  "modified": "23-07-2019",
  "categories": ["home comfort"]
  }
];

// Расширяем пример и сохраняйм в файл all-costs.json
fs.readFile(products, 'utf8', (err, data) => {
const costProducts = JSON.parse(data);

const newCostProducts = {...costProducts, ...productsToAdd};

fs.writeFile(allProducts, JSON.stringify(newCostProducts), (err) => {
console.log('Done!');
});
});


const PORT = process.env.PORT || 3000;
 
// app.get('/', function (req, res) {
//   res.send('Hello World +++')
// })

// app.get('/home', function (req, res) {
//     res.send('home page +++')
//   })

//   app.get('/about', function (req, res) {
//     res.send('about page +++')
//   })  
 
//   app.get('/users/', function (req, res) {
//     res.send('Hello  -    ' + req.query.name + '   '+ req.query.age)
//   })  

//   app.post('/:', function (req, res) {
//     res.send('Post')
//   })  

//   app.put('/', function (req, res) {
//     res.send('Put')
//   })  

//   app.patch('/', function (req, res) {
//     res.send('Patch')
//   }) 

//   app.delete('/', function (req, res) {
//     res.send('Delete')
//   })

//   app.use(function(req, res, next){
//       let err = new Error ('not found');
//       err.status = 404;
//       next(err);
//   })

//   app.use(function(err, req, res, next){
//       res.status(err.status || 500);
//       res.render('error', {message: err.message, error: err});
//       })

app.listen(PORT, () =>{
    console.log('Server is running on ' + PORT);
});