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


document.getElementById("taxForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Get the input values
    var income = parseFloat(document.getElementById("income").value);
    var taxRate = parseFloat(document.getElementById("taxRate").value) / 100; // Convert percentage to decimal

    // Calculate tax amount
    var taxAmount = income * (taxRate / 100);

    // Display the result
    document.getElementById("taxResult").innerHTML = "Tax Amount: RS. " + taxAmount.toFixed(2);
});
