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



document.getElementById('retirementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var currentAge = parseFloat(document.getElementById('currentAge').value);
    var retirementAge = parseFloat(document.getElementById('retirementAge').value);
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    
    // Calculate retirement savings
    var yearsToRetirement = retirementAge - currentAge;
    var totalSavings = 0;
    for (var i = 0; i < yearsToRetirement * 12; i++) {
        totalSavings += monthlySavings;
        totalSavings *= (1 + interestRate / 100 / 12);
    }
    
    // Calculate annual retirement income
    var annualRetirementIncome = totalSavings * (interestRate / 100 / 12) / ((Math.pow(1 + (interestRate / 100 / 12), yearsToRetirement * 12)) - 1);
    
    // Display result
    var retirementResultElement = document.getElementById('retirementResult');
    retirementResultElement.innerHTML = '<p>Annual retirement income: RS. ' + annualRetirementIncome.toFixed(2) + '</p>';
});


document.getElementById('retirementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var currentAge = parseFloat(document.getElementById('currentAge').value);
    var retirementAge = parseFloat(document.getElementById('retirementAge').value);
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    
    // Calculate retirement savings
    var yearsToRetirement = retirementAge - currentAge;
    var totalSavings = 0;
    for (var i = 0; i < yearsToRetirement * 12; i++) {
        totalSavings += monthlySavings;
        totalSavings *= (1 + interestRate / 100 / 12);
    }
    
    // Calculate annual retirement income
    var annualRetirementIncome = totalSavings * (interestRate / 100 / 12) / ((Math.pow(1 + (interestRate / 100 / 12), yearsToRetirement * 12)) - 1);
    
    // Display result
    var retirementResultElement = document.getElementById('retirementResult');
    retirementResultElement.innerHTML = '<p>Annual retirement income: RS. ' + annualRetirementIncome.toFixed(2) + '</p>';
});
