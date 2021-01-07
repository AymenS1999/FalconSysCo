// Changing ACTIVE link when CLICKED
$(".navbar-nav a").on("click",function(){
	$(".navbar-nav").find("li.active").removeClass("active");
	$(this).parent().addClass("active");
});


/* Changing ACTIVE link when SCROLLED*/
//Creating SCROLL SPY
$(document).ready(function(){
	$("body").scrollspy({
		target : "#title",
	});
});
//Listening to SCROLL SPY
$(window).scroll(function(){
	$(".navbar-nav").find("li.active").removeClass("active");
	$(this).parent().addClass("active");
});


/*NAVIGATING to the respective PRODUCTs or SERVICEs section and ALSO TOGGLING the TABLE*/
//PRODUCTS
$("#goto-mechanical-products").click(function(event) {
	/* Act on the event */
	if($("#collapseMechanicalProducts").css("display")==="none")
		$("#mechanical-products").trigger("click");
});
$("#goto-instrumentation-products").click(function(event) {
	/* Act on the event */
	if($("#collapseInstrumentationProducts").css("display")==="none")
		$("#instrumentation-products").trigger("click");
});
$("#goto-electrical-products").click(function(event) {
	/* Act on the event */
	if($("#collapseElectricalProducts").css("display")==="none")
		$("#electrical-products").trigger("click");
});
$("#goto-industrial-automation-products").click(function(event) {
	/* Act on the event */
	if($("#collapseIndustrialAutomationProducts").css("display")==="none")
		$("#industrial-automation-products").trigger("click");
});
$("#goto-industrial-automation-solution").click(function(event) {
	/* Act on the event */
	if($("#collapseIndustrialAutomationSolution").css("display")==="none")
		$("#industrial-automation-solution").trigger("click");
});
$("#goto-fire-and-safety").click(function(event) {
	/* Act on the event */
	if($("#collapseFireAndSafetyProducts").css("display")==="none")
		$("#fire-and-safety").trigger("click");
});
$("#goto-it-and-networking").click(function(event) {
	/* Act on the event */
	if($("#collapseItNetworkingSolutions").css("display")==="none")
		$("#it-and-networking").trigger("click");
});

// SERVICES
$("#goto-electrical-services").click(function(event) {
	/* Act on the event */
	if($("#collapseElectricalServices").css("display")==="none")
		$("#electrical-services").trigger("click");
});
$("#goto-mechanical-services").click(function(event) {
	/* Act on the event */
	if($("#collapseMechanicalServices").css("display")==="none")
		$("#mechanical-services").trigger("click");
});
$("#goto-power-and-fuel-services").click(function(event) {
	/* Act on the event */
	if($("#collapsePowerAndFuelServices").css("display")==="none")
		$("#power-and-fuel-services").trigger("click");
});


/*To Enable Disable Pipe-Calculator*/
//To Enable Pipe Calculator
$("#clickToPipeCalculator").click(function(event) {
	/* Act on the event */
	if($(".pipe-calculator-form").css("display")==="none"){
		$(".pipe-calculator .utilities-text").slideToggle();
		$(".pipe-calculator-form").slideToggle();
	}
});

/* To TOGGLE Metric/Imperial Units */
// When METRIC is ACTIVE
$("#metricSelector").click(function(event) {
	/* Act on the event */
	$("#metricSelector").addClass('active');
	$("#imperialSelector").removeClass('active');
	$("#nps-label").text("Nominal Pipe Size (mm)");
	$("#od-label").text("Outer Diameter (mm)*");
	$("#ps-label").text("Schedule");
	$("#wt-label").text("Wall Thickness (mm)*");
	$("#pl-label").text("Length (meters)");
	$("#weight-label").text("Weight (Kg/m)");
	$(".pipe-calculator-form #weight").val("");	//To CLEAR the PREVIOUSLY calculated IMPERIAL VALUE (if any)
});
// When IMPERIAL is ACTIVE
$("#imperialSelector").click(function(event) {
	/* Act on the event */
	$("#imperialSelector").addClass('active');
	$("#metricSelector").removeClass('active');
	$("#nps-label").text("Nominal Pipe Size (inches)");
	$("#od-label").text("Outer Diameter (inches)*");
	$("#ps-label").text("Schedule");
	$("#wt-label").text("Wall Thickness (inches)*");
	$("#pl-label").text("Length (ft)");
	$("#weight-label").text("Weight (lb/ft)");
	$(".pipe-calculator-form #weight").val("");	//To CLEAR the PREVIOUSLY calculated METRIC VALUE (if any)
});



// To go Toggle Back (Disable) Pipe Calculator
$(".pipe-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$(".pipe-calculator .utilities-text").slideToggle();
	$(".pipe-calculator-form").slideToggle();
});


//Pipe Calculator LOGIC
const pi = 3.142;
$(".pipe-calculator-form .calculate-button").click(function(){
	var od = $("#outDiameter").val()/1000;
	var wt = $("#wThickness").val()/1000;
	// console.log(od + wt);
	if(od != "" && wt != ""){
		if(od > 2*wt){
			// For METRIC CALCULATION
			if($("#metricSelector").hasClass('active')){
				var id = od - 2*wt;
				var weight = ((pi/4)*(od*od - id*id)*7850).toFixed(6);
			}
			//For IMPERIAL CALCULATION 
			else{
				od = od*1000 ;
				wt = wt*1000;
				var id = od - 2*wt;
				var weight = ((pi/4)*(od*od - id*id)*0.284*12).toFixed(6);
			}
			// console.log((weight/Math.pow(10, 6)).toFixed(6));
			$(".pipe-calculator-form #weight").val(weight); 
		}
		else {
			alert("\"Outer Diameter\" should be GREATER THAN twice (2 times) of \"Wall Thickness\"");
		}
	}
	else {
		alert("\"Outer Diameter\" and \"Wall Thickness\" cannot be Empty");
	}	
});



/*To Validate Form*/
document.querySelector("form .submit-button").addEventListener("click", function(){
	var name = document.querySelector("#fname").value +" "+ document.querySelector("#lname").value;
	var emailId = document.querySelector("#emailId").value;
	if(name!="" && emailId!=""){
		alert("Form Submitted");
		document.querySelector("#fname").value = "";
		document.querySelector("#lname").value = "";
		document.querySelector("#emailId").value = "";
		document.querySelector("#mobileNo").value = "";
	}
	else
		alert("Please fill All the Required Fields");
});

