document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    
    // Fixed conversion rates (for demonstration)
    var conversionRates = {
        USD: { EUR: 0.85, GBP: 0.72, INR: 73.97 },
        EUR: { USD: 1.18, GBP: 0.85, INR: 88.19 },
        GBP: { USD: 1.38, EUR: 1.18, INR: 102.72 },
        INR: { USD: 0.014, EUR: 0.011, GBP: 0.0097 }
        // Add more conversion rates as needed
    };
    
    // Perform conversion
    var convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    
    // Display result
    var conversionResultElement = document.getElementById('conversionResult');
    conversionResultElement.innerHTML = '<p>' + amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency + '</p>';
});
