// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

var totalEarnings = 0;
var hoursWorked = parseFloat($('#hours').val());

$('#calculateResult').click(function() {
    // Get values from inputs
    var hourlyRate = parseFloat($('#hourly-rate').data('value')); // Get the numeric value
    var hoursWorked = parseFloat($('#hours').val());

    // Check if both inputs are valid numbers
    if (!isNaN(hourlyRate) && !isNaN(hoursWorked)) {
        // Calculate total earnings
        var totalEarnings = hourlyRate * hoursWorked;
        $('#result').val('$' + totalEarnings.toFixed(2));  // Display the result
        $('#displayMessage').text('The total cost would be $' + totalEarnings + ' with ' + hoursWorked + ' hours at $' + hourlyRate + ' per hour');
        
    } else {
        alert("Please enter valid values for hourly rate and hours worked.");
    }
});
$('#clearFields').click(function() {
    $('#hours').val('');  // Clear hours field
    $('#result').val('');  // Clear result field
    $('#displayMessage').text('')
})



