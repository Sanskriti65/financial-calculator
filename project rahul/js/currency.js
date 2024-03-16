document.getElementById('currencyForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    const convertedAmount = amount * exchangeRate;
  
    const resultElement = document.getElementById('conversionResult');
    resultElement.innerHTML = `
      <p>${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}</p>
    `;
  });

  function getExchangeRate(fromCurrency, toCurrency) {
    // Mock exchange rates for demonstration (replace with actual rates or API call)
    const exchangeRates = {
      USD: { EUR: 0.85, GBP: 0.72, INR: 75.20 },
      EUR: { USD: 1.18, GBP: 0.85, INR: 88.24 },
      GBP: { USD: 1.39, EUR: 1.17, INR: 103.89 },
      INR: { USD: 0.013, EUR: 0.011, GBP: 0.0096 }
    };
  
    return exchangeRates[fromCurrency][toCurrency];
  }