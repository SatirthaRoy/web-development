let shoeName = 'addidas';

const product = {
  name: 'shoe',
  price: 90,
  rating: {
    star: 4.7,
    count: 90
  },
  'delivery-time' : '1 day',
  sendMessage() {
    console.log('this is a short hand method to declare fucntion in an object');
  },
  shoeName // this is shorthand property to store variable with same name
};


product.sendMessage();
console.log(product.shoeName);

