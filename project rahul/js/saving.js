
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


// tax js 

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