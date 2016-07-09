// Pseudocode
// -----------------------
// Prevent default form submission
// Page loads with default image
// User enters pre-selected city (i.e. NYC, New York, New York City)
// User submits city name through "Submit" button click
// Read the name in input box
// Replace background image with associated name
// Button targets background city image in <body>
// Background is changed to appropriate city image


//Prevent Default
$( "#mainform" ).submit(function( event ) {
  event.preventDefault();
});


//Change Image
$("#submit-btn").click(function( event ){
	// Test to see if button works 
	// alert("Hello");
	$("body").html("background", url("img/nyc.jpg");
});