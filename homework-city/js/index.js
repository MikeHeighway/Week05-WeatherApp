// Pseudocode
// -----------------------
// Prevent default form submission
// User enters city name in form field
// User enters pre-selected text (i.e. NYC, New York, New York City)
// User submits city name through button click
// City image in body is replaced by appropriately named file
// 


//Prevent Default
$( "#mainform" ).submit(function( event ) {
  event.preventDefault();
});