// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//global variable
var totalEarnings = 0;

//calculate result button 
$('#calculateResult').click(function() {
    // Get values from inputs
    var hourlyRate = parseFloat($('#hourly-rate').data('value')); // Get the numeric value
    var hoursNeeded = parseFloat($('#hours').val());
    // Check if both inputs are valid numbers
    if (!isNaN(hourlyRate) && !isNaN(hoursNeeded) && (hoursNeeded>0)){
        // Calculate total earnings
        var totalEarnings = hourlyRate * hoursNeeded;
        $('#result').val('$' + totalEarnings.toFixed(2));  // Display the result
        $('#displayMessage').text('The total cost would be $' + totalEarnings + ' with ' + hoursNeeded + ' hours at $' + hourlyRate + ' per hour');
        
    } else {
        alert("Please enter valid values for hours needed. Must be a number and positive");
    }
});
//clear fields button
$('#clearFields').click(function() {
    $('#hours').val('');  // Clear hours field
    $('#result').val('');  // Clear result field
    $('#displayMessage').text('') //clear display message
})



