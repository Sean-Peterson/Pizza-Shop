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
    
    //Get toppings from form checkboxes for customPizza
    var toppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      toppings.push(pizzaTopping);
    });
    var size = $('input[name=size]:checked').val();//Size value for new PizzaPie
    var customPizza = new PizzaPie(size, toppings);//create new object
    var priceOne = customPizza.price()//set a variable to the price of customPizza

    //Start ordering form two
    //Get toppings from form checkboxes
    var toppingsTwo = []
    $("input:checkbox[name=topping-two]:checked").each(function(){
      var pizzaToppingTwo = $(this).val();
      toppingsTwo.push(pizzaToppingTwo);
    });
    var size = $('input[name=size-two]:checked').val();//Size value for new PizzaPieTwo
    var customPizzaTwo = new PizzaPie(size, toppingsTwo);//create new object for second PizzaPie
    var priceTwo = customPizzaTwo.price();//set a variable to the price of customPizzaTwo
    //logic that decides how to calculate and display price
    if (customPizzaTwo.price() > 0){
      $('#total-price').text(' ' + '$' + add(priceOne, priceTwo))
    } else {
      $('#total-price').text(' ' + '$' + priceOne)
    }

    $('#orderForm').hide();//hide the orderForm
    $('.showPrice').show();//shows the element where the price is displayed
    $('#header').hide();//hides the header
    $('.jumbotron').hide();//hides the jumbotron
  });
  //Toggles display of the form for the second pizza
  $('#second-pie-form').click(function(){
    $('#secondPie').toggle();//toggle view of second pizza ordering form
    $('#buttonOne').toggle();//toggle submit button from first pizza form to second
    $('#buttonTwo').toggle();//toggle display of second submit button
  });

  $('#address-button').click(function(){
    $(".jumbotron").hide();//hide jumbotron from view
    $('#gif').show();//show cat pizza gif
    $('.showPrice').hide();//hide the price and address
  });
});
