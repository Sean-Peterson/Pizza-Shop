//BACK-END
function PizzaPie(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

PizzaPie.prototype.price = function() {
  return this.size * 3 + this.toppings.length;
};

var add = function(n1,n2) {
  return  n1 + n2;
}

//FRONT-END
$(document).ready(function() {
  $('#orderForm').submit(function(event) {
    event.preventDefault();
    //Get toppings from form checkboxes
    var toppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      toppings.push(pizzaTopping);
    });

    var size = $('input[name=size]:checked').val();
    var customPizza = new PizzaPie(size, toppings);
    var priceOne = customPizza.price()

    //Start ordering form two
    //Get toppings from form checkboxes
    var toppingsTwo = []
    $("input:checkbox[name=topping-two]:checked").each(function(){
      var pizzaToppingTwo = $(this).val();
      toppingsTwo.push(pizzaToppingTwo);
    });

    var size = $('input[name=size-two]:checked').val();
    var customPizzaTwo = new PizzaPie(size, toppings);
    var priceTwo = customPizzaTwo.price();

    if (customPizzaTwo.price() > 0){
      $('#total-price').text(' ' + '$' + add(priceOne, priceTwo))
    } else {
      $('#total-price').text(' ' + '$' + priceOne)
    }

    $('#orderForm').hide();
    $('.showPrice').show();
  });
  $('#second-pie-form').click(function(){
    $('#secondPie').toggle();
  });



});
