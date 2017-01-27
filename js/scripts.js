//BACK-END
function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

var newPizza = function (n) {
  new PizzaPie(n)
};

PizzaPie.prototype.price = function() {
  return this.size * 3 + this.toppings;
};

//FRONT-END
$(document).ready(function() {

});
