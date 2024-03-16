document.getElementById('studentLoanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get input values
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var loanTerm = parseFloat(document.getElementById('loanTerm').value);
    
    // Calculate monthly payment
    var monthlyInterestRate = interestRate / 100 / 12;
    var totalPayments = loanTerm * 12;
    var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));
    
    // Display result
    var studentLoanResultElement = document.getElementById('studentLoanResult');
    studentLoanResultElement.innerHTML = '<p>Monthly Payment: RS. ' + monthlyPayment.toFixed(2) + '</p>';
});
