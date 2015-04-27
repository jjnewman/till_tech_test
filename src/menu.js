
$.getJSON("hipstercoffee.json" , function(data){

  var all_items_with_prices = [];
// var all_item_names = []; 
// var all_item_prices = []; 

  all_items_with_prices = data[0].prices[0];

  console.log(all_items_with_prices);
// all_item_names = Object.keys(data[0]["prices"][0]);
// all_item_prices = all_item_names.map(function(v) { return (data[0]["prices"][0])[v]; });

  $.each(all_items_with_prices, function(item, price) {
    $('.prices').append(
    $('<option></option>').val(item).html(item + "  $" + price)
    )}
  )
});