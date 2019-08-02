const fs = require('fs');

//шаблон json согласно ТЗ
const products = './costs-mock.json';
// вторичный файл после слияния с датой
const allProducts = './db/costs/all-costs.json';

// объекты products на добавление в основной json файл
const productsToAdd = [
  {
    id: 19112832,
    name: 'Оплата интернета',
    description: '',
    price: '80',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['internet', 'computer'],
  },

  {
    id: 19112833,
    name: 'Заправка авто',
    description: '',
    price: '800',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['азс'],
  },

  {
    id: 19112834,
    name: 'Индивидуальные занятия на ф-но',
    description: '',
    price: '450',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['music', 'computer'],
  },

  {
    id: 19112835,
    name: 'Покупка тура на 2-х',
    description: '',
    price: '600',
    currency: 'EUR',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['trip'],
  },

  {
    id: 19112836,
    name: 'Домашний кинотеатр',
    description: '',
    price: '15000',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['home comfort', 'music'],
  },

  {
    id: 19112837,
    name: 'Продукты питания - супермаркет',
    description: '',
    price: '1800',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['food'],
  },

  {
    id: 19112838,
    name: 'Услуги косметолога',
    description: '',
    price: '1200',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['healthy'],
  },

  {
    id: 19112839,
    name: 'Покупка спортивного уголка',
    description: '',
    price: '2850',
    currency: 'UAN',
    created: '21-07-2019',
    modified: '23-07-2019',
    categories: ['healthy', 'internet'],
  },
];

// Расширяем пример и сохраняйм в файл all-costs.json
fs.readFile(products, 'utf8', (err, data) => {
  const costProducts = JSON.parse(data);
  let newCombineArray = costProducts.concat(productsToAdd);

  fs.writeFile(allProducts, JSON.stringify(newCombineArray), err => {
    console.log('Done! Create new BD!');
  });
});
