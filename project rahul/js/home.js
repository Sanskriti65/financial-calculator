$(document).ready(function() {
    $('#calculator-form').submit(function(event) {
      event.preventDefault();
      var principal = parseFloat($('#principal').val());
      var interestRate = parseFloat($('#interest-rate').val()) / 100;
      var years = parseInt($('#years').val());
      var futureValue = principal * Math.pow(1 + interestRate, years);
      $('#result').html('<h6>Future Value: ' + futureValue.toFixed(2) + '</h6>');
    });
  });