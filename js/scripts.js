//BACK-END
function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

PizzaPie.prototype.price = function() {
  return this.size * 3 + this.toppings.length;
};

//FRONT-END
$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var toppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      toppings.push(pizzaTopping);
    });

    var size = $('input[name=size]:checked').val();

    var customPizza = new PizzaPie(size, toppings);

    alert(customPizza.price())





    // var customerPizza = newPizza()


  });



});
