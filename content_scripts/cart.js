$(function(){

  var order_billing_state = "ON"; // ON
  var order_billing_country = 'CANADA';  // CANADA USA
/*
  $('#order_billing_name').val(order_billing_name);
  $('#order_email').val(order_email);
  $('#order_tel').val(order_tel);
  $('#bo').val(bo);
  $('#oba3').val(oba3);
  $('#order_billing_zip').val(order_billing_zip);
  $('#order_billing_city').val(order_billing_city);
*/
  var credit_card_type = 'american_express'; // visa american_express master
  var card_number = '379856449971009';
  var exp_mon = '08';
  var exp_yr = '2021';
  var cvv = '0962';
  $('#credit_card_type').val(credit_card_type);
  $('input:eq(12)').val(card_number);
  $('#credit_card_month').val(exp_mon);
  $('#credit_card_year').val(exp_yr);
  $('input:eq(13)').val(cvv);
  $('.iCheck-helper')[1].click();

  // console.log($("script[type='text/x-tmpl']")[1].innerHTML);
  // set state
  $('#order_billing_state').val(order_billing_state);

  /* NOTE: Ignore everything above if you used autoFill */
  chrome.runtime.sendMessage({type: 'stop'}, function(res){});

})
