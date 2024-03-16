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





