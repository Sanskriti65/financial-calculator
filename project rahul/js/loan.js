document.getElementById('debtForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get input values
    var principalAmount = parseFloat(document.getElementById('principalAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    
    // Calculate total debt
    var totalDebt = principalAmount * Math.pow(1 + (interestRate / 100), loanTerm);
    
    // Display result
    var debtResultElement = document.getElementById('debtResult');
    debtResultElement.innerHTML = '<p>Total debt: RS. ' + totalDebt.toFixed(2) + '</p>';
});
