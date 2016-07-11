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

//Delay
// $(document).ready(function (){

	//Prevent Default
	$( "#main-form" ).submit(function( event ){
	  event.preventDefault();
	});
	
	//Change Image
	$("#submit-btn").click(function( event ){
		// Test to see if button works 
		// alert("Hello");
	
		// Collecting value from input field "city-type", remove spaces
		var city=$("#city-type").val().toLowerCase().trim();
	
		// Allow names outside of class names
		if (city=="nyc" || city=="new york" || city=="new york city") {
				city="nyc";
		} else	if (city=="sf" || city=="san francisco" || city=="san fran") {
				city="sf";
		} else 	if (city=="la" || city=="los angeles" || city=="the city of angels") {
				city="la";
		}	else 	if (city=="austin" || city =="sxsw") {
				city="austin";
		}	else 	if (city=="denver" || city =="dnvr" || city=="mile high") {
				city="denver";
		} else if (city=="sydney") {
				city="sydney";
		}
	
		$("body").attr("class", city);
	});

