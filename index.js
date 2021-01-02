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


/*NAVIGATING to the RESPECTIVE PRODUCT or SERVICE and ALSO TOGGLING the TABLE*/
//PRODUCTS
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
$("#goto-instrumentation-products").click(function(event) {
	/* Act on the event */
	if($("#collapseInstrumentationProducts").css("display")==="none")
		$("#instrumentation-products").trigger("click");
});
$("#goto-mechanical-products").click(function(event) {
	/* Act on the event */
	if($("#collapseMechanicalProducts").css("display")==="none")
		$("#mechanical-products").trigger("click");
});

$("#goto-fire-and-safety").click(function(event) {
	/* Act on the event */
	if($("#collapseFireAndSafetyProducts").css("display")==="none")
		$("#fire-and-safety").trigger("click");
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


// //Enable NAVBAR dropdown when hovered but ONLY on LARGE SCREEN DEVICES else IT CRASHES 
// $(window).on("load resize", function(){
// 	if(this.matchMedia("(min-width: 768px)").matches){
// 		$(".dropdown-toggle-split").mouseenter(function(){
// 			$(".dropdown-toggle-split").trigger("click");
// 		});
// 		$(".dropdown-menu").mouseleave(function(){
// 			$(".dropdown-toggle-split").trigger("click");
// 		}); 
// 	}
// 	else {
// 		$(".dropdown-toggle-split").off("mouseenter mouseleave");
// 	}
// });

if((window).matchMedia("(max-width : 767px)").matches){
	$(".pipe-chart .utilities-text").text("Download Pipe Chart");
	$(".pipe-calculator .utilities-text").text("Use Pipe Calculator");
}


// When Pipe Chart and Pipe Calculator is Hovered
$(".pipe-chart").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(".pipe-chart .utilities-text").text("Download Pipe Chart");
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(".pipe-chart .utilities-text").text("Pipe Chart");
});
$(".pipe-calculator").hover(function() {
	/* Stuff to do when the mouse enters the element */
	$(".pipe-calculator .utilities-text").text("Use Pipe Calculator");
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$(".pipe-calculator .utilities-text").text("Pipe Calculator");
});


/*To Enable Disable Pipe-Calculator*/
//To Enable Pipe Calculator
$(".pipe-calculator").click(function(event) {
	/* Act on the event */
	if($(".pipe-calculator-form").css("display")==="none"){
		$(".pipe-calculator .utilities-text").slideToggle();
		$(".pipe-calculator-form").slideToggle();
	}
});
// To go Toggle Back (Disable) Pipe Calculator
$(".pipe-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$(".pipe-calculator .utilities-text").slideToggle();
	$(".pipe-calculator-form").slideToggle();
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

