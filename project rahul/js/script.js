document.getElementById('loanForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
    
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    
    const resultElement = document.getElementById('resultLoan');
    resultElement.innerHTML = `Monthly Payment: RS. ${monthlyPayment.toFixed(2)}`;
  });

  document.getElementById('savingsForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const monthlyDeposit = parseFloat(document.getElementById('monthlyDeposit').value);
    const interestRate = parseFloat(document.getElementById('interestRateSaving').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    
    // console.log(interestRate);
    let totalAmount = initialAmount;
    let monthlyInterestRate = interestRate / 12;
    let totalMonths = years * 12;

    for (let i = 0; i < totalMonths; i++) {
      totalAmount += monthlyDeposit;
      totalAmount *= (1 + monthlyInterestRate);
    }
  
    const resultElement = document.getElementById('resultSaving');
    resultElement.innerHTML = `Total Savings After ${years} Years: RS. ${totalAmount.toFixed(2)}`;
  });

  document.getElementById('investmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const initialAmount = parseFloat(document.getElementById('startingAmount').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const interestRate = parseFloat(document.getElementById('interestRateInvestment').value) / 100;
    const years = parseFloat(document.getElementById('yearsInvestment').value);
    
    let totalAmount = initialAmount;
    let monthlyInterestRate = interestRate / 12;
    let totalMonths = years * 12;
  
    for (let i = 0; i < totalMonths; i++) {
      totalAmount += monthlyContribution;
      totalAmount *= (1 + monthlyInterestRate);
    }
  
    const resultElement = document.getElementById('resultInvestment');
    resultElement.innerHTML = `Total Investment After ${years} Years: RS. ${totalAmount.toFixed(2)}`;
  });
  
  document.getElementById('budgetForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const income = parseFloat(document.getElementById('income').value);
    const housing = parseFloat(document.getElementById('housing').value);
    const utilities = parseFloat(document.getElementById('utilities').value);
    const food = parseFloat(document.getElementById('food').value);
    const transportation = parseFloat(document.getElementById('transportation').value);
    
    const totalExpenses = housing + utilities + food + transportation;
    const remainingBudget = income - totalExpenses;
  
    let budgetStatus = '';
    if (remainingBudget >= 0) {
      budgetStatus = 'You have surplus budget.';
    } else {
      budgetStatus = 'You have a budget deficit. Consider reducing expenses or increasing income.';
    }
  
    const resultElement = document.getElementById('budgetResult');
    resultElement.innerHTML = `
      <p>Total Expenses: RS. ${totalExpenses.toFixed(2)}</p>
      <p>Remaining Budget: RS. ${remainingBudget.toFixed(2)}</p>
      <p>${budgetStatus}</p>
    `;
  });

  document.getElementById('retirementForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const currentAge = parseInt(document.getElementById('currentAge').value);
    const retirementAge = parseInt(document.getElementById('retirementAge').value);
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
  
    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;
    const totalSavings = monthlySavings * monthsToRetirement;
    
    let futureValue = totalSavings;
    for (let i = 0; i < monthsToRetirement; i++) {
      futureValue = (futureValue + monthlySavings) * (1 + interestRate / 12);
    }
  
    const monthlyWithdrawal = futureValue / (yearsToRetirement * 12);
  
    const resultElement = document.getElementById('retirementResult');
    resultElement.innerHTML = `
      <p>Total Savings at Retirement: RS. ${futureValue.toFixed(2)}</p>
      <p>Monthly Withdrawal Needed in Retirement: RS. ${monthlyWithdrawal.toFixed(2)}</p>
    `;
  });  

  document.getElementById('debtForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
    
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
    
    const monthlyPayment = (principalAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    const totalInterest = monthlyPayment * totalPayments - principalAmount;
  
    const resultElement = document.getElementById('debtResult');
    resultElement.innerHTML = `
      <p>Monthly Payment: RS. ${monthlyPayment.toFixed(2)}</p>
      <p>Total Interest Paid: RS. ${totalInterest.toFixed(2)}</p>
    `;
  });

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
  
  document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const income = parseFloat(document.getElementById('income').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value) / 100;
  
    const taxAmount = income * taxRate;
    const afterTaxIncome = income - taxAmount;
  
    const resultElement = document.getElementById('taxResult');
    resultElement.innerHTML = `
      <p>Tax Amount: RS. ${taxAmount.toFixed(2)}</p>
      <p>Income After Tax: RS. ${afterTaxIncome.toFixed(2)}</p>
    `;
  });
  
  document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
  
    const resultElement = document.getElementById('mortgageResult');
    resultElement.innerHTML = `
      <p>Monthly Payment: RS. ${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: RS. ${totalPayment.toFixed(2)}</p>
      <p>Total Interest Paid: RS. ${totalInterest.toFixed(2)}</p>
    `;
  });
  
  document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
  
    const resultElement = document.getElementById('mortgageResult');
    resultElement.innerHTML = `
      <p>Monthly Payment: RS. ${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: RS. ${totalPayment.toFixed(2)}</p>
      <p>Total Interest Paid: RS. ${totalInterest.toFixed(2)}</p>
    `;
  });
  document.getElementById('creditCardForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const balance = parseFloat(document.getElementById('balance').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const monthlyPayment = parseFloat(document.getElementById('monthlyPayment').value);
  
    let months = 0;
    let totalInterest = 0;
    let currentBalance = balance;
  
    while (currentBalance > 0) {
      months++;
      const monthlyInterest = currentBalance * interestRate / 12;
      totalInterest += monthlyInterest;
      currentBalance = currentBalance + monthlyInterest - monthlyPayment;
      
      // Prevent infinite loop if the payment is too low
      if (months > 500) {
        alert('Payment too low to pay off the balance.');
        break;
      }    }
  
    const resultElement = document.getElementById('creditCardResult');
    resultElement.innerHTML = `
      <p>Months to Pay Off: ${months}</p>
      <p>Total Interest Paid: RS. ${totalInterest.toFixed(2)}</p>
    `;
  });
    
  document.getElementById('studentLoanForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);
  
    const monthlyInterestRate = interestRate / 12;
    const totalPayments = loanTerm * 12;
  
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;
  
    const resultElement = document.getElementById('studentLoanResult');
    resultElement.innerHTML = `
      <p>Monthly Payment: RS. ${monthlyPayment.toFixed(2)}</p>
      <p>Total Payment: RS. ${totalPayment.toFixed(2)}</p>
      <p>Total Interest Paid: RS. ${totalInterest.toFixed(2)}</p>
    `;
  });
  
  



  document.getElementById("savingsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Get the input values
    var initialAmount = parseFloat(document.getElementById("initialAmount").value);
    var monthlyDeposit = parseFloat(document.getElementById("monthlyDeposit").value);
    var interestRate = parseFloat(document.getElementById("interestRateSaving").value) / 100; // Convert percentage to decimal
    var years = parseInt(document.getElementById("years").value);

    // Calculate total savings
    var totalSavings = initialAmount;
    for (var i = 0; i < years * 12; i++) {
        totalSavings += monthlyDeposit;
        totalSavings *= (1 + interestRate / 12); // Compounded monthly
    }

    // Display the result
    document.getElementById("resultSaving").innerHTML = "Total Savings: RS. " + totalSavings.toFixed(2);
});
