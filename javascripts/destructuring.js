const obj = {
  product_name: 'dress',
  price : 192,
  fun: function function1() {
    console.log('it is a fucntion in an object');
  }
};

obj.fun(); // this is a way to call a function in an object

// let product_name = obj.product_name;
// let price = obj.price;
// the below line code represents the same code in the comment
let {product_name, price } = obj;

console.log(`${product_name} is ${price} dollar.`);