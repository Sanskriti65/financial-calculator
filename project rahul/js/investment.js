document.getElementById('investmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var initialInvestment = parseFloat(document.getElementById('startingAmount').value);
    var monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    var interestRate = parseFloat(document.getElementById('interestRateInvestment').value);
    var years = parseFloat(document.getElementById('yearsInvestment').value);
    
    // Calculate total investment
    var totalInvestment = initialInvestment;
    for (var i = 0; i < years * 12; i++) {
        totalInvestment += monthlyContribution;
        totalInvestment *= (1 + interestRate / 100 / 12);
    }
    
    // Display result
    var resultInvestmentElement = document.getElementById('resultInvestment');
    resultInvestmentElement.innerHTML = '<p>Total investment after ' + years + ' years: RS. ' + totalInvestment.toFixed(2) + '</p>';
});



ddocument.getElementById('investmentForm').addEventListener('submit', function(e) {
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
