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
