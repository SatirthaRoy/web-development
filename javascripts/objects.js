const product = {
  name: 'shoe',
  price: 100,
  rating : {
    star: 4.7,
    count: 90
  },
  'delivery-time' : 123,
  fun: function magi(name, work){
    console.log(name + ' '+ work + ' you.');
  },

  calculation : {
    summation : function sum(a,b) {
      return a + b;
    },
    multiplication : function mul(a,b) {
      return a * b;
    },

  }

  
}
// const name = product.name;
//same for all
const {name, price, rating } = product;
const {star, count} = rating;

const productjsn = JSON.stringify(product);
const productjso = JSON.parse(productjsn);
console.log(productjso);

console.log(product.calculation.summation(12,324));
console.log(product.calculation.multiplication(12,324));
console.log('name = ' + name + ' price = ' + price);
console.log(rating);
console.log('star: ' + star);
console.log('count: ' + count);


const product1 = {
  name: 'shoe',
  price: 123
};

const product2 = {
  name: 'shoe',
  price: 122
};

function isSameProduct(product1,product2) {
  return (product1.name === product2.name && product1.price === product2.price) ? true : false;
}


console.log(isSameProduct(product1,product2));
