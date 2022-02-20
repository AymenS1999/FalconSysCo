//To SHRINK NAVBAR on SCROLL
 $(document).on("scroll", function(){
 	if ($(document).scrollTop() > 400){
 		$(".primary-nav").addClass("shrink");
 	} 
 	else {
 		$(".primary-nav").removeClass("shrink");
 	}
});


// FADING EFFECTS
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).outerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top; //+ $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
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
$("#goto-it-and-networking-services").click(function(event) {
	/* Act on the event */
	if($("#collapseItServices").css("display")==="none")
		$("#it-and-networking-services").trigger("click");
});



//UTILITIES SECTION

/*To SWITCH between the UTILITIES*/
let utilities = {
// 	"activate-pipe-chart" : "pipe-chart",
	"activate-pipe-calculator" : "pipe-calculator",
	"activate-steel-sheet-calculator" : "steel-sheet-calculator",
	"activate-round-bars-calculator" : "round-bars-calculator",
	"activate-square-bars-calculator" : "square-bars-calculator",
	"activate-flat-bars-calculator" : "flat-bars-calculator",
	"activate-channels-gost-calculator" : "channels-gost-calculator",
	"activate-channels-upn-calculator" : "channels-upn-calculator",
	"activate-beams-ipn-calculator" : "beams-ipn-calculator",
	"activate-beams-ipe-calculator" : "beams-ipe-calculator",
	"activate-beams-hea-calculator" : "beams-hea-calculator",
	"activate-beams-heb-calculator" : "beams-heb-calculator",
	"activate-hollow-circle-calculator" : "hollow-circle-calculator",
	"activate-hollow-rect-calculator" : "hollow-rect-calculator",
}



//For PIPE CHART
$("#activate-pipe-chart").click(function(event) {
	/* Act on the event */
	if($("#activate-pipe-chart").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-pipe-chart"){
				// Button to Activate
				$('#'+x).addClass("active");
				//Utility to show
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				// Hide the Rest
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});

//For PIPE CALCULATOR
$("#activate-pipe-calculator").click(function(event) {
	/* Act on the event */
	if($("#activate-pipe-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-pipe-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});

//For STEEL SHEETS and PLATES
$("#activate-steel-sheet-calculator").click(function(event){
	if($("#activate-steel-sheet-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-steel-sheet-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For ROUND STEEL BARS
$("#activate-round-bars-calculator").click(function(event) {
	if($("#activate-round-bars-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-round-bars-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For SQUARE STEEL BARS
$("#activate-square-bars-calculator").click(function(event) {
	if($("#activate-square-bars-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-square-bars-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});

//For FLAT BARS
$("#activate-flat-bars-calculator").click(function(event) {
	if($("#activate-flat-bars-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-flat-bars-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});

//For CHANNELS GOST
$("#activate-channels-gost-calculator").click(function(event) {
	if($("#activate-channels-gost-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-channels-gost-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For CHANNELS UPN
$("#activate-channels-upn-calculator").click(function(event) {
	if($("#activate-channels-upn-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-channels-upn-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For BEAMS IPN
$("#activate-beams-ipn-calculator").click(function(event) {
	if($("#activate-beams-ipn-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-beams-ipn-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For BEAMS IPE
$("#activate-beams-ipe-calculator").click(function(event) {
	if($("#activate-beams-ipe-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-beams-ipe-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For BEAMS HEA
$("#activate-beams-hea-calculator").click(function(event) {
	if($("#activate-beams-hea-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-beams-hea-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For BEAMS HEB
$("#activate-beams-heb-calculator").click(function(event) {
	if($("#activate-beams-heb-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-beams-heb-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For HOLLOW CIRCULAR STRUCTURAL SECTIONS
$("#activate-hollow-circle-calculator").click(function(event) {
	if($("#activate-hollow-circle-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-hollow-circle-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});


//For HOLLOW SQUARE/RECTANGULAR STRUCTURAL SECTIONS
$("#activate-hollow-rect-calculator").click(function(event) {
	if($("#activate-hollow-rect-calculator").hasClass("active") === false)
		for(let x in utilities){
			if(x == "activate-hollow-rect-calculator"){
				$('#'+x).addClass("active");
				$('#'+utilities[x]).css("display", "block");
			}
			else{
				$('#'+x).removeClass("active");
				$('#'+utilities[x]).css("display", "none");
			}
		}
});



/*To Enable Disable Pipe-Calculator*/
//To Enable Pipe Calculator
$("#clickToPipeCalculator").click(function(event) {
	/* Act on the event */
	if($("#pipe-calculator-form").css("display")==="none"){
		$("#pipe-calculator .utilities-text").slideToggle();
		$("#pipe-calculator-form").slideToggle();
	}
});


/* To TOGGLE Metric/Imperial Units */
// When METRIC is SELECTED
$("#metricSelector").click(function(event) {
	/* Act on the event */
	$("#metricSelector").addClass('active');			//ACTIVATE "Metric Selector"
	$("#imperialSelector").removeClass('active');		//DE-ACTIVATE "Imperial Selector"
	
	$("#nps-selector").val("default");		//To RESET it back to DEFAULT
	
	$("#od-label").text("Outer Diameter (mm)*");
	$("#outDiameter").val("");			//To CLEAR Outer Diameter
	
	//To RESET Pipe Schedule
	$("#ps-selector option").remove();
	$("#ps-selector").append(
		$(document.createElement("option")).prop({value : 'default', text : '--Select--'})
	);
	$("#wt-label").text("Wall Thickness (mm)*");
	$("#wThickness").val("");
	$("#pl-label").text("Length (meters)");
	$("#weight-label").text("Weight (Kg/m)");
	$("#pipe-calculator-form #weight").val("");	//To CLEAR the PREVIOUSLY calculated IMPERIAL VALUE (if any)
});


// When IMPERIAL is SELECTED
$("#imperialSelector").click(function(event) {
	/* Act on the event */
	$("#imperialSelector").addClass('active');
	$("#metricSelector").removeClass('active');
	
	$("#nps-selector").val("default");

	$("#od-label").text("Outer Diameter (inches)*");
	$("#outDiameter").val("");

	//To RESET Pipe Schedule
	$("#ps-selector option").remove();
	$("#ps-selector").append(
		$(document.createElement("option")).prop({value : 'default', text : '--Select--'})
	);
	$("#wt-label").text("Wall Thickness (inches)*");
	$("#wThickness").val("");
	$("#pl-label").text("Length (ft)");
	$("#weight-label").text("Weight (lb/ft)");
	$("#pipe-calculator-form #weight").val("");	//To CLEAR the PREVIOUSLY calculated METRIC VALUE (if any)
});


//MAP of OD VALUES in IMPERIAL
var imperialOuterDiameter = {
	'1/8' : 0.405,
	'1/4' : 0.540,
	'3/8' : 0.675,
	'1/2' : 0.840,
	'3/4' : 1.050,
	'1' : 1.315,
	'1-1/4' : 1.660,
	'1-1/2' : 1.900,
	'2' : 2.375,
	'2-1/2' : 2.875,
	'3' : 3.500,
	'3-1/2': 4.000,
	'4' : 4.500,
	'5' : 5.563,
	'6' : 6.625,
	'8' : 8.625,
	'10' : 10.750,
	'12' : 12.750,
}


//To AUTOMATICALLY ADD "Outer Diameter" VALUE when NPS <option> is SELECTED
function getOuterDiameter(e){
	//NOTE - ".val()" will GIVE the "value" defined in <options value="">
	//We do this because for NPS <= 12, the OD is DIFFERENT. But for NPS 14 onwards it is same (NOTE NPS is always in INCHES) 
	var optionSelected = $("#nps-selector option:selected");		//The SELECTED OPTION
	$("#wThickness").val("");			//We want to CLEAR our WALL THICKNESS FIELD everytime its VALUE is CHANGED
	//If NOTHING is SELECTED in NPS
	if(optionSelected.val() == "default"){
		$("#outDiameter").val("");
	}
	//If METRIC
	else if($("#metricSelector").hasClass('active')){
		//The REASON we use ".val()" (OUTPUTS can be from 1 to 67 in INTEGER) instead of ".text()" is because the "text()" OUTPUTS will be like "1/4, 2-1/2, 1-1/2, 1/8, etc" (i.e MIXED FRACTIONS) which DON'T WORK here in CONDITIONAL
		if(optionSelected.val() < 19)
			$("#outDiameter").val((imperialOuterDiameter[optionSelected.text()]*25.4).toFixed(2));
		else
			$("#outDiameter").val((optionSelected.text()*25.4).toFixed(2));
	}
	//If IMPERIAL
	else{ 
		if(optionSelected.val() < 19)
			$("#outDiameter").val(imperialOuterDiameter[optionSelected.text()]);
		else
			$("#outDiameter").val($("#nps-selector option:selected").text());
	}
}


var npsScheduleWallThickness = {
	//For 1/8"
	"1/8" : {
		"10/10S" : 0.049,
		"STD/40/40S" : 0.068,
		"XS/80/80S" : 0.095,
	},
	//For 1/4"
	"1/4" : {
		"10/10S" : 0.065,
		"STD/40/40S" : 0.088,
		"XS/80/80S" : 0.119,
	},
	//For 3/8"
	"3/8" : {
		"10/10S" : 0.065,
		"STD/40/40S" : 0.091,
		"XS/80/80S" : 0.126,
	},
	//For 1/2"
	"1/2" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.083, 
		'STD/40/40S' : 0.109, 
		'XS/80/80S' : 0.147, 
		'160' : 0.188, 
		'XX' : 0.294,
	},
	//For 3/4"
	"3/4" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.083, 
		'STD/40/40S' : 0.113, 
		'XS/80/80S' : 0.154, 
		'160' : 0.219, 
		'XX' : 0.308,
	},
	//For 1"
	"1" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.109, 
		'STD/40/40S' : 0.133, 
		'XS/80/80S' : 0.179, 
		'160' : 0.250, 
		'XX' : 0.358,
	},
	//For 1-1/4"
	"1-1/4" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.109, 
		'STD/40/40S' : 0.140, 
		'XS/80/80S' : 0.191, 
		'160' : 0.250, 
		'XX' : 0.382,
	},
	//For 1-1/2"
	"1-1/2" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.109, 
		'STD/40/40S' : 0.145, 
		'XS/80/80S' : 0.200, 
		'160' : 0.281, 
		'XX' : 0.400,
	},
	//For 2"
	"2" : {
		'5/5S' : 0.065, 
		'10/10S' : 0.109, 
		'STD/40/40S' : 0.154, 
		'XS/80/80S' : 0.218, 
		'160' : 0.344, 
		'XX' : 0.436,
	},
	//For 2-1/2"
	"2-1/2" : {
		'5/5S' : 0.083, 
		'10/10S' : 0.120, 
		'STD/40/40S' : 0.203, 
		'XS/80/80S' : 0.276, 
		'160' : 0.375, 
		'XX' : 0.552,
	},
	//For 3"
	"3" : {
		'5/5S' : 0.083, 
		'10/10S' : 0.120, 
		'STD/40/40S' : 0.216, 
		'XS/80/80S' : 0.300, 
		'160' : 0.438, 
		'XX' : 0.600,
	},
	//For 3-1/2"
	"3-1/2" : {
		'5/5S' : 0.083, 
		'10/10S' : 0.120, 
		'STD/40/40S' : 0.226, 
		'XS/80/80S' : 0.318, 
		'XX' : 0.636,
	},
	//For 4"
	"4" : {
		'5/5S' : 0.083, 
		'10/10S' : 0.120, 
		'STD/40/40S' : 0.237, 
		'XS/80/80S' : 0.337, 
		'120' : 0.438, 
		'160' : 0.531, 
		'XX' : 0.674,
	},
	//For 5"
	"5" : {
		'5/5S' : 0.109, 
		'10/10S' : 0.134, 
		'STD/40/40S' : 0.258, 
		'XS/80/80S' : 0.375, 
		'120' : 0.500, 
		'160' : 0.625, 
		'XX' : 0.750,
	},
	//For 6"
	"6" : {
		'5/5S' : 0.109, 
		'10/10S' : 0.134, 
		'STD/40/40S' : 0.280, 
		'XS/80/80S' : 0.432, 
		'120' : 0.562, 
		'160' : 0.719, 
		'XX' : 0.864,
	},
	//For 8"
	"8" : {
		'5/5S' : 0.109, 
		'10/10S' : 0.148, 
		'20' : 0.250, 
		'30' : 0.277, 
		'STD/40/40S' : 0.322, 
		'60' : 0.406, 
		'XS/80/80S' : 0.500, 
		'100' : 0.594, 
		'120' : 0.719, 
		'140' : 0.812, 
		'XX' : 0.875,
		'160' : 0.906,
	},
	//For 10"
	"10" : {
		'5S' : 0.134, 
		'10S' : 0.165, 
		'20' : 0.250, 
		'30' : 0.307, 
		'STD/40/40S' : 0.365, 
		'XS/60/80S' : 0.500, 
		'80' : 0.594, 
		'100' : 0.719, 
		'120' : 0.844, 
		'140/XX' : 1.000, 
		'160' : 1.125,
	},
	//for 12"
	"12" : {
		'5S' : 0.156,
		'10S' : 0.180, 
		'20' : 0.250, 
		'30' : 0.330, 
		'STD/40S' : 0.375, 
		'40' : 0.406, 
		'XS/80S' : 0.500, 
		'60' : 0.562, 
		'80' : 0.688, 
		'100' : 0.844, 
		'120' : 1.000, 
		'140' : 1.125, 
		'160' : 1.312,
	},
	//for 14"
	"14" : {
		'10S' : 0.188, 
		'10' : 0.250, 
		'20' : 0.312, 
		'STD/30/40S' : 0.375, 
		'40' : 0.438, 
		'XS/80S' : 0.500, 
		'60' : 0.594, 
		'80' : 0.750, 
		'100' : 0.938, 
		'120' : 1.094, 
		'140' : 1.250, 
		'160' : 1.406,
	},
	//For 16"
	"16" : {
		'10S' : 0.188, 
		'10' : 0.250, 
		'20' : 0.312, 
		'STD/30/40S' : 0.375, 
		'XS/40/80S' : 0.500, 
		'60' : 0.656, 
		'80' : 0.844, 
		'100' : 1.031, 
		'120' : 1.219, 
		'140' : 1.438, 
		'160' : 1.594,
	},
	//For 18"
	"18" : {
		'10S' : 0.188, 
		'10' : 0.250, 
		'20' : 0.312, 
		'STD/40S' : 0.375, 
		'30' : 0.438, 
		'XS/80S' : 0.500, 
		'40' : 0.562, 
		'60' : 0.750, 
		'80' : 0.938, 
		'100' : 1.156, 
		'120' : 1.375, 
		'140' : 1.562, 
		'160' : 1.781,
	},
	//For 20"
	"20" : {
		'10S' : 0.218, 
		'10' : 0.250, 
		'STD/20/40S' : 0.375, 
		'XS/30/80S' : 0.500, 
		'40' : 0.594, 
		'60' : 0.812, 
		'80' : 1.031, 
		'100' : 1.281, 
		'120' : 1.500, 
		'140' : 1.750, 
		'160' : 1.969,
	},
	"22" : {
		'10S' : 0.218, 
		'10' : 0.250, 
		'STD/20/40S' : 0.375, 
		'XS/30/80S' : 0.500, 
		'60' : 0.875, 
		'80' : 1.125, 
		'100' : 1.375, 
		'120' : 1.625, 
		'140' : 1.875, 
		'160' : 2.125,
	},
	"24" : {
		'10/10S' : 0.250, 
		'STD/20/40S' : 0.375, 
		'XS/80S' : 0.500, 
		'30' : 0.562, 
		'40' : 0.688, 
		'60' : 0.969, 
		'80' : 1.219, 
		'100' : 1.531, 
		'120' : 1.812, 
		'140' : 2.062, 
		'160' : 2.344,
	},
	"26" : {
		'10' : 0.312, 
		'STD/40S' : 0.375, 
		'XS/80S' : 0.500,
	},
	"28" : {
		'10' : 0.312, 
		'STD/40S' : 0.375, 
		'XS/20/80S' : 0.500, 
		'30' : 0.625,
	},
	"30" : {
		'10' : 0.312, 
		'STD/40S' : 0.375, 
		'XS/20/80S' : 0.500, 
		'30' : 0.625,
	},
	"32" : {
		'10' : 0.312, 
		'STD' : 0.375, 
		'XS/20' : 0.500, 
		'30' : 0.625,
		'40' : 0.688,
	},
	"34" : {
		'10' : 0.312, 
		'STD' : 0.375, 
		'XS/20' : 0.500, 
		'30' : 0.625,
		'40' : 0.688,
	},
	"36" : {
		'10' : 0.312, 
		'STD' : 0.375, 
		'XS/80S' : 0.500,
	},
	"42" : {
		'STD' : 0.375, 
		'XS/80S' : 0.500,
	},
	"48" : {
		'STD' : 0.375, 
		'XS/80S' : 0.500,
	},
};

//To GENERATE OPTIONS
function createOptions(npsSelected){
	//To ADD a "default" value at the TOP of every OPTION LIST
	$("#ps-selector").append(
		$(document.createElement("option")).prop({value : "default", text : "--Select--"})
	);
	//We declare it here because every time the NPS changes the OPTION VALUES must again START from "1"
	var optionValue = 1;

	//We CREATE an ARRAY of KEYS using Object.key(objectName) for our OBJECT "npsScheduleWallThickness"
	for(var val of Object.keys(npsScheduleWallThickness[npsSelected])){
		$("#ps-selector").append(
			$(document.createElement("option")).prop({value : optionValue, text : val})
		);
		optionValue++;
	}
}

//To change the OPTIONS of "SCHEDULE" when a NPS OPTION is SELECTED
$(document).ready(function() {
	$("#nps-selector").change(function(event) {
		/* Act on the event */
		// var selectedOption = $("#nps-selector option:selected").val();
		var selectedOption = $("#nps-selector option:selected").text();		

		//A COUNTER for <option value=""> because we require it in "createOption()"
		var i = 1;		//We DECLARE it here because we want to RESET it back to "1" everytime
		
		//To CLEAR the previous OPTIONS or ELSE the OPTIONS will ONLY BE ADDED
		$("#ps-selector option").remove();

		if(selectedOption == "--Select--")
			$("#ps-selector").append(
				$(document.createElement("option")).prop({value : 'default', text : '--Select--'})
			);
		else
			createOptions(selectedOption);
	});	
});

//To AUTOMATICALLY get WALL THICKNESS when SCHEDULE is selected
function getWallThickness(e){
	var npsSelected = $("#nps-selector option:selected").text();
	var psSelected = $("#ps-selector option:selected").text();
	if($("#imperialSelector").hasClass('active'))
		$("#wThickness").val(npsScheduleWallThickness[npsSelected][psSelected]);
	else
		$("#wThickness").val((npsScheduleWallThickness[npsSelected][psSelected]*25.4).toFixed(2));
}


//Pipe Calculator LOGIC
const pi = 3.142;
$("#pipe-calculator-form .calculate-button").click(function(){
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
			$("#pipe-calculator-form #weight").val(weight); 
		}
		else {
			alert("\"Outer Diameter\" should be GREATER THAN twice (2 times) of \"Wall Thickness\"");
		}
	}
	else {
		alert("\"Outer Diameter\" and \"Wall Thickness\" cannot be Empty");
	}	
});


// To go Toggle Back (Disable) Pipe Calculator
$("#pipe-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#pipe-calculator .utilities-text").slideToggle();
	$("#pipe-calculator-form").slideToggle();
});





//To Enable Steel Sheet Calculator
$("#clickToSteelSheetCalculator").click(function(event) {
	/* Act on the event */
	if($("#steel-sheet-calculator-form").css("display")==="none"){
		$("#steel-sheet-calculator .utilities-text").slideToggle();
		$("#steel-sheet-calculator-form").slideToggle();
	}
});

//To Enable Steel Sheet Calculator
$("#clickToSteelSheetCalculator").click(function(event) {
	/* Act on the event */
	if($("#steel-sheet-calculator-form").css("display")==="none"){
		$("#steel-sheet-calculator .utilities-text").slideToggle();
		$("#steel-sheet-calculator-form").slideToggle();
	}
});
/*Steel Sheet calculator LOGIC*/
$("#steel-sheet-calculator-form .calculate-button").click(function(event) {
	/* Act on the event */
	var thc = $("#steel-sheet-calculator-form #thickness").val()/1000;
	var wth = $("#steel-sheet-calculator-form #width").val()/1000;
	var len = $("#steel-sheet-calculator-form #len").val()/1000;
	var qty = $("#steel-sheet-calculator-form #qty").val();
	var wtPerItem = thc*wth*len*7850;
	var totalWt = wtPerItem*qty;
	console.log(wtPerItem +" "+ totalWt);
	$("#steel-sheet-calculator-form #wt-per-item").val(wtPerItem.toFixed(2));
	$("#steel-sheet-calculator-form #total-wt").val(totalWt.toFixed(2));
});
//To Disable Steel Sheet Calculator
$("#steel-sheet-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#steel-sheet-calculator .utilities-text").slideToggle();
	$("#steel-sheet-calculator-form").slideToggle();
});



//To Enable Round Bar Calculator
$("#clickToRoundBarCalculator").click(function(event) {
	/* Act on the event */
	if($("#round-bars-calculator-form").css("display")==="none"){
		$("#round-bars-calculator .utilities-text").slideToggle();
		$("#round-bars-calculator-form").slideToggle();
	}
});

/*Round Bar Calculator LOGIC*/
$("#round-bars-calculator-form .calculate-button").click(function(event) {
	/* Act on the event */
	var dia = $("#round-bars-calculator-form #dia").val();
	var len = $("#round-bars-calculator-form #len").val();
	var wtPerMtr = dia*dia*0.006165;
	var totalWt = wtPerMtr*len;
	$("#round-bars-calculator-form #wt-per-mtr").val(wtPerMtr.toFixed(2));
	$("#round-bars-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Round Bar Calculator
$("#round-bars-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#round-bars-calculator .utilities-text").slideToggle();
	$("#round-bars-calculator-form").slideToggle();
});





//To Enable Square Bar Calculator
$("#clickToSquareBarCalculator").click(function(event) {
	/* Act on the event */
	if($("#square-bars-calculator-form").css("display")==="none"){
		$("#square-bars-calculator .utilities-text").slideToggle();
		$("#square-bars-calculator-form").slideToggle();
	}
});
/*Square Bar Calculator LOGIC*/
$("#square-bars-calculator-form .calculate-button").click(function(event) {
	/* Act on the event */
	var side = $("#square-bars-calculator-form #side").val();
	var len = $("#square-bars-calculator-form #len").val();
	var wtPerMtr = side*side*0.00786;
	var totalWt = wtPerMtr*len;
	$("#square-bars-calculator-form #wt-per-mtr").val(wtPerMtr.toFixed(2));
	$("#square-bars-calculator-form #total-wt").val(totalWt.toFixed(2));
});
//To Disable Square Bar Calculator
$("#square-bars-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#square-bars-calculator .utilities-text").slideToggle();
	$("#square-bars-calculator-form").slideToggle();
});



//To Enable Flat Bar Calculator
$("#clickToFlatBarCalculator").click(function(event) {
	/* Act on the event */
	if($("#flat-bars-calculator-form").css("display")==="none"){
		$("#flat-bars-calculator .utilities-text").slideToggle();
		$("#flat-bars-calculator-form").slideToggle();
	}
});
/*Flat Bar Calculator LOGIC*/
$("#flat-bars-calculator-form .calculate-button").click(function(event) {
	/* Act on the event */
	var w = $("#flat-bars-calculator-form #width").val();
	var t = $("#flat-bars-calculator-form #thickness").val();
	var len = $("#flat-bars-calculator-form #len").val();
	var wtPerMtr = w*t*0.00786;
	var totalWt = wtPerMtr*len;
	$("#flat-bars-calculator-form #wt-per-mtr").val(wtPerMtr.toFixed(2));
	$("#flat-bars-calculator-form #total-wt").val(totalWt.toFixed(2));
});
//To Disable Flat Bar Calculator
$("#flat-bars-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#flat-bars-calculator .utilities-text").slideToggle();
	$("#flat-bars-calculator-form").slideToggle();
});



//To Enable Channels GOST Calculator
$("#clickToChannelsGostCalculator").click(function(event) {
	/* Act on the event */
	if($("#channels-gost-calculator-form").css("display")==="none"){
		$("#channels-gost-calculator .utilities-text").slideToggle();
		$("#channels-gost-calculator-form").slideToggle();
	}
});

let gostChannel = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [65.0, 36.0, 4.4, 7.2, 5.90],
	2 : [80.0, 40.0, 4.2, 7.4, 7.03],
	3 : [100.0, 46.0, 4.3, 7.6, 8.58],
	4 : [120.0, 52.0, 4.3, 7.9, 10.22],
	5 : [140.0, 58.0, 4.4, 8.2, 12.07],
	6 : [160.0, 64.0, 4.4, 8.5, 13.83],
	7 : [180.0, 70.0, 4.5, 9.2, 16.16],
	8 : [200.0, 76.0, 4.6, 9.6, 18.41],
	9 : [220.0, 80.0, 4.6, 10.0, 20.53],
	10 : [240.0, 90.0, 4.8, 10.6, 23.70],
	11 : [270.0, 95.0, 6.0, 10.5, 27.70],
	12 : [300.0, 100.0, 6.3, 11.4, 32.09],
};
/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getGostChannelValues(e){
	var profileSelected = $("#channels-gost-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#channels-gost-calculator-form #height").val("--select-profile--");
		$("#channels-gost-calculator-form #width").val("--select-profile--");
		$("#channels-gost-calculator-form #sThickness").val("--select-profile--");
		$("#channels-gost-calculator-form #tThickness").val("--select-profile--");
		$("#channels-gost-calculator-form #wt-per-mtr").val("");
	}
	else{
		$("#channels-gost-calculator-form #height").val(gostChannel[profileSelected][0]);
		$("#channels-gost-calculator-form #width").val(gostChannel[profileSelected][1]);
		$("#channels-gost-calculator-form #sThickness").val(gostChannel[profileSelected][2]);
		$("#channels-gost-calculator-form #tThickness").val(gostChannel[profileSelected][3]);
		$("#channels-gost-calculator-form #wt-per-mtr").val(gostChannel[profileSelected][4].toFixed(2));
	}
}

/*Channels GOST Calculator LOGIC*/
$("#channels-gost-calculator-form .calculate-button").click(function(event) {
	var len = $("#channels-gost-calculator-form #len").val();
	var wtPerMtr = $("#channels-gost-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#channels-gost-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Channels GOST Calculator
$("#channels-gost-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#channels-gost-calculator .utilities-text").slideToggle();
	$("#channels-gost-calculator-form").slideToggle();
});




//To Enable Channels UPN Calculator
$("#clickToChannelsUpnCalculator").click(function(event) {
	/* Act on the event */
	if($("#channels-upn-calculator-form").css("display")==="none"){
		$("#channels-upn-calculator .utilities-text").slideToggle();
		$("#channels-upn-calculator-form").slideToggle();
	}
});

let upnChannel = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [50.0, 25.0, 5.0, 6.0, 3.86],
	2 : [50.0, 38.0, 5.0, 7.0, 5.59],
	3 : [60.0, 30.0, 6.0, 6.0, 5.07],
	4 : [65.0, 42.0, 5.5, 7.5, 7.09],
	5 : [80.0, 45.0, 6.0, 8.0, 8.64],
	6 : [100.0, 50.0, 6.0, 8.5, 10.60],
	7 : [120.0, 55.0, 7.0, 9.0, 13.40],
	8 : [140.0, 60.0, 7.0, 10.0, 16.00],
	9 : [160.0, 65.0, 7.5, 10.5, 18.80],
	10 : [180.0, 70.0, 8.0, 11.0, 22.00],
	11 : [200.0, 75.0, 8.5, 11.5, 25.30],
	12 : [220.0, 80.0, 9.0, 12.5, 29.40],
	13 : [240.0, 85.0, 9.5, 13.0, 33.20],
	14 : [260.0, 90.0, 10.0, 14.0, 37.90],
	15 : [280.0, 95.0, 10.0, 15.0, 41.80],
	16 : [300.0, 100.0, 10.0, 16.0, 46.20],
	17 : [320.0, 100.0, 14.0, 17.5, 59.50],
	18 : [350.0, 100.0, 14.0, 16.0, 60.60],
	19 : [380.0, 102.0, 13.5, 16.0, 63.10],
	20 : [400.0, 110.0, 14.0, 18.0, 71.80],
};
/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getUpnChannelValues(e){
	var profileSelected = $("#channels-upn-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#channels-upn-calculator-form #height").val("--select-profile--");
		$("#channels-upn-calculator-form #width").val("--select-profile--"); 
		$("#channels-upn-calculator-form #sThickness").val("--select-profile--"); 
		$("#channels-upn-calculator-form #tThickness").val("--select-profile--"); 
		$("#channels-upn-calculator-form #wt-per-mtr").val(""); 
	}
	else{
		$("#channels-upn-calculator-form #height").val(upnChannel[profileSelected][0]);
		$("#channels-upn-calculator-form #width").val(upnChannel[profileSelected][1]);
		$("#channels-upn-calculator-form #sThickness").val(upnChannel[profileSelected][2]);
		$("#channels-upn-calculator-form #tThickness").val(upnChannel[profileSelected][3]);
		$("#channels-upn-calculator-form #wt-per-mtr").val(upnChannel[profileSelected][4].toFixed(2));
	}
}

/*Channels UPN Calculator LOGIC*/
$("#channels-upn-calculator-form .calculate-button").click(function(event) {
	var len = $("#channels-upn-calculator-form #len").val();
	var wtPerMtr = $("#channels-upn-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#channels-upn-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Channels UPN Calculator
$("#channels-upn-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#channels-upn-calculator .utilities-text").slideToggle();
	$("#channels-upn-calculator-form").slideToggle();
});




//To Enable Beams IPN Calculator
$("#clickToBeamsIpnCalculator").click(function(event) {
	/* Act on the event */
	if($("#beams-ipn-calculator-form").css("display")==="none"){
		$("#beams-ipn-calculator .utilities-text").slideToggle();
		$("#beams-ipn-calculator-form").slideToggle();
	}
});

let ipnBeam = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [80.0, 42.0, 3.9, 5.9, 5.94],
	2 : [100.0, 50.0, 4.5, 6.8, 8.34],
	3 : [120.0, 58.0, 5.1, 7.7, 11.10],
	4 : [140.0, 66.0, 5.7, 8.6, 14.30],
	5 : [160.0, 74.0, 6.3, 9.5, 17.90],
	6 : [180.0, 82.0, 6.9, 10.4, 21.90],
	7 : [200.0, 90.0, 7.5, 11.3, 26.20],
	8 : [220.0, 98.0, 8.1, 12.2, 31.10],
	9 : [240.0, 106.0, 8.7, 13.1, 36.20],
	10 : [260.0, 113.0, 9.4, 14.1, 41.90],
	11 : [280.0, 119.0, 10.1, 15.2, 47.90],
	12 : [300.0, 125.0, 10.8, 16.2, 54.20],
	13 : [320.0, 131.0, 11.5, 17.3, 61.00],
	14 : [340.0, 137.0, 12.2, 18.3, 68.00],
	15 : [360.0, 143.0, 13.0, 19.5, 76.10],
	16 : [380.0, 149.0, 13.7, 20.5, 84.00],
	17 : [400.0, 155.0, 14.4, 21.6, 92.40],
	18 : [450.0, 170.0, 16.2, 24.3, 115.00],
	19 : [500.0, 185.0, 18.0, 27.0, 141.00],
	20 : [550.0, 200.0, 19.0, 30.0, 166.00],
};

/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getIpnBeamsValues(e){
	var profileSelected = $("#beams-ipn-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#beams-ipn-calculator-form #height").val("--select-profile--");
		$("#beams-ipn-calculator-form #width").val("--select-profile--"); 
		$("#beams-ipn-calculator-form #sThickness").val("--select-profile--"); 
		$("#beams-ipn-calculator-form #tThickness").val("--select-profile--"); 
		$("#beams-ipn-calculator-form #wt-per-mtr").val(""); 
	}
	else{
		$("#beams-ipn-calculator-form #height").val(ipnBeam[profileSelected][0]);
		$("#beams-ipn-calculator-form #width").val(ipnBeam[profileSelected][1]);
		$("#beams-ipn-calculator-form #sThickness").val(ipnBeam[profileSelected][2]);
		$("#beams-ipn-calculator-form #tThickness").val(ipnBeam[profileSelected][3]);
		$("#beams-ipn-calculator-form #wt-per-mtr").val(ipnBeam[profileSelected][4].toFixed(2));
	}
}

/*Beams IPN Calculator LOGIC*/
$("#beams-ipn-calculator-form .calculate-button").click(function(event) {
	var len = $("#beams-ipn-calculator-form #len").val();
	var wtPerMtr = $("#beams-ipn-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#beams-ipn-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Beams IPN Calculator
$("#beams-ipn-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#beams-ipn-calculator .utilities-text").slideToggle();
	$("#beams-ipn-calculator-form").slideToggle();
});




//To Enable Beams IPE Calculator
$("#clickToBeamsIpeCalculator").click(function(event) {
	/* Act on the event */
	if($("#beams-ipe-calculator-form").css("display")==="none"){
		$("#beams-ipe-calculator .utilities-text").slideToggle();
		$("#beams-ipe-calculator-form").slideToggle();
	}
});

let ipeBeam = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [80.0, 46.0, 3.8, 5.2, 6.00],
	2 : [100.0, 55.0, 4.1, 5.7, 8.10],
	3 : [120.0, 64.0, 4.4, 6.3, 10.40],
	4 : [140.0, 73.0, 4.7, 6.9, 12.90],
	5 : [160.0, 82.0, 5.0, 7.4, 15.80],
	6 : [180.0, 91.0, 5.3, 8.0, 18.80],
	7 : [200.0, 100.0, 5.6, 8.5, 22.40],
	8 : [220.0, 110.0, 5.9, 9.2, 26.20],
	9 : [240.0, 120.0, 6.2, 9.8, 30.70],
	10 : [270.0, 135.0, 6.6, 10.2, 36.10],
	11 : [300.0, 150.0, 7.1, 10.7, 42.20],
	12 : [330.0, 160.0, 7.5, 11.5, 49.10],
	13 : [360.0, 170.0, 8.0, 12.7, 57.10],
	14 : [400.0, 180.0, 8.6, 13.5, 66.30],
	15 : [450.0, 190.0, 9.4, 14.6, 77.60],
	16 : [500.0, 200.0, 10.2, 16.0, 90.70],
	17 : [550.0, 210.0, 11.1, 17.2, 106.00],
	18 : [600.0, 220.0, 12.0, 19.0, 122.00],
};

/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getIpeBeamsValues(e){
	var profileSelected = $("#beams-ipe-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#beams-ipe-calculator-form #height").val("--select-profile--");
		$("#beams-ipe-calculator-form #width").val("--select-profile--"); 
		$("#beams-ipe-calculator-form #sThickness").val("--select-profile--"); 
		$("#beams-ipe-calculator-form #tThickness").val("--select-profile--"); 
		$("#beams-ipe-calculator-form #wt-per-mtr").val(""); 
	}
	else{
		$("#beams-ipe-calculator-form #height").val(ipeBeam[profileSelected][0]);
		$("#beams-ipe-calculator-form #width").val(ipeBeam[profileSelected][1]);
		$("#beams-ipe-calculator-form #sThickness").val(ipeBeam[profileSelected][2]);
		$("#beams-ipe-calculator-form #tThickness").val(ipeBeam[profileSelected][3]);
		$("#beams-ipe-calculator-form #wt-per-mtr").val(ipeBeam[profileSelected][4].toFixed(2));
	}
}

/*Beams IPE Calculator LOGIC*/
$("#beams-ipe-calculator-form .calculate-button").click(function(event) {
	var len = $("#beams-ipe-calculator-form #len").val();
	var wtPerMtr = $("#beams-ipe-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#beams-ipe-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Beams IPE Calculator
$("#beams-ipe-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#beams-ipe-calculator .utilities-text").slideToggle();
	$("#beams-ipe-calculator-form").slideToggle();
});



//To Enable Beams HEA Calculator
$("#clickToBeamsHeaCalculator").click(function(event) {
	/* Act on the event */
	if($("#beams-hea-calculator-form").css("display")==="none"){
		$("#beams-hea-calculator .utilities-text").slideToggle();
		$("#beams-hea-calculator-form").slideToggle();
	}
});

let heaBeam = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [96.0, 100.0, 5.0, 8.0, 16.70],
	2 : [114.0, 120.0, 5.0, 8.0, 19.90],
	3 : [133.0, 140.0, 5.5, 8.5, 24.70],
	4 : [152.0, 160.0, 6.0, 9.0, 30.40],
	5 : [171.0, 180.0, 6.0, 9.5, 35.50],
	6 : [190.0, 200.0, 6.5, 10.0, 42.30],
	7 : [210.0, 220.0, 7.0, 11.0, 50.50],
	8 : [230.0, 240.0, 7.5, 12.0, 60.30],
	9 : [250.0, 260.0, 7.5, 12.5, 68.20],
	10 : [270.0, 280.0, 8.0, 13.0, 76.40],
	11 : [290.0, 300.0, 8.5, 14.0, 88.30],
	12 : [310.0, 300.0, 9.0, 15.5, 97.60],
	13 : [330.0, 300.0, 9.5, 16.5, 105.00],
	14 : [350.0, 300.0, 10.0, 17.5, 112.00],
	15 : [390.0, 300.0, 11.0, 19.0, 125.00],
	16 : [440.0, 300.0, 11.5, 21.0, 140.00],
	17 : [490.0, 300.0, 12.0, 23.0, 155.00],
	18 : [540.0, 300.0, 12.5, 24.0, 166.00],
	19 : [590.0, 300.0, 13.0, 25.0, 178.00],
	20 : [640.0, 300.0, 13.5, 26.0, 190.00],
	21 : [690.0, 300.0, 14.5, 27.0, 204.00],
	22 : [790.0, 300.0, 15.0, 28.0, 224.00],
	23 : [890.0, 300.0, 16.0, 30.0, 252.00],
	24 : [990.0, 300.0, 16.5, 31.0, 272.00],
};

/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getHeaBeamsValues(e){
	var profileSelected = $("#beams-hea-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#beams-hea-calculator-form #height").val("--select-profile--");
		$("#beams-hea-calculator-form #width").val("--select-profile--"); 
		$("#beams-hea-calculator-form #sThickness").val("--select-profile--"); 
		$("#beams-hea-calculator-form #tThickness").val("--select-profile--"); 
		$("#beams-hea-calculator-form #wt-per-mtr").val(""); 
	}
	else{
		$("#beams-hea-calculator-form #height").val(heaBeam[profileSelected][0]);
		$("#beams-hea-calculator-form #width").val(heaBeam[profileSelected][1]);
		$("#beams-hea-calculator-form #sThickness").val(heaBeam[profileSelected][2]);
		$("#beams-hea-calculator-form #tThickness").val(heaBeam[profileSelected][3]);
		$("#beams-hea-calculator-form #wt-per-mtr").val(heaBeam[profileSelected][4].toFixed(2));
	}
}

/*Beams HEA Calculator LOGIC*/
$("#beams-hea-calculator-form .calculate-button").click(function(event) {
	var len = $("#beams-hea-calculator-form #len").val();
	var wtPerMtr = $("#beams-hea-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#beams-hea-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Beams HEA Calculator
$("#beams-hea-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#beams-hea-calculator .utilities-text").slideToggle();
	$("#beams-hea-calculator-form").slideToggle();
});



//To Enable Beams HEB Calculator
$("#clickToBeamsHebCalculator").click(function(event) {
	/* Act on the event */
	if($("#beams-heb-calculator-form").css("display")==="none"){
		$("#beams-heb-calculator .utilities-text").slideToggle();
		$("#beams-heb-calculator-form").slideToggle();
	}
});

let hebBeam = {
	//Using OPTION VALUES as KEY
	//OPTION : [height,width,sThick,tThick,wt-per-mtr]
	1 : [100.0, 100.0, 6.0, 10.0, 20.40],
	2 : [120.0, 120.0, 6.5, 11.0, 26.70],
	3 : [140.0, 140.0, 7.0, 12.0, 33.70],
	4 : [160.0, 160.0, 8.0, 13.0, 42.60],
	5 : [180.0, 180.0, 8.5, 14.0, 51.20],
	6 : [200.0, 200.0, 9.0, 15.0, 61.30],
	7 : [220.0, 220.0, 9.5, 16.0, 71.50],
	8 : [240.0, 240.0, 10.0, 17.0, 83.20],
	9 : [260.0, 260.0, 10.0, 17.5, 93.00],
	10 : [280.0, 280.0, 10.5, 18.0, 103.00],
	11 : [300.0, 300.0, 11.0, 19.0, 117.00],
	12 : [320.0, 300.0, 11.5, 20.5, 127.00],
	13 : [340.0, 300.0, 12, 21.5, 134.00],
	14 : [360.0, 300.0, 12.5, 22.5, 142.00],
	15 : [400.0, 300.0, 13.5, 24.0, 155.00],
	16 : [450.0, 300.0, 14.0, 26.0, 171.00],
	17 : [500.0, 300.0, 14.5, 28.0, 187.00],
	18 : [550.0, 300.0, 15.0, 29.0, 199.00],
	19 : [600.0, 300.0, 15.5, 30.0, 212.00],
	20 : [650.0, 300.0, 16.0, 31.0, 225.00],
	21 : [700.0, 300.0, 17.0, 32.0, 241.00],
	22 : [800.0, 300.0, 17.5, 33.0, 262.00],
	23 : [900.0, 300.0, 18.5, 35.0, 291.00],
	24 : [1000.0, 300.0, 19.0, 36.0, 314.00],
};

/*Automatically fill h,w,sThick, tThick when Profile is SELECTED*/
function getHebBeamsValues(e){
	var profileSelected = $("#beams-heb-profile-selector option:selected").val();
	if(profileSelected == "default"){
		$("#beams-heb-calculator-form #height").val("--select-profile--");
		$("#beams-heb-calculator-form #width").val("--select-profile--"); 
		$("#beams-heb-calculator-form #sThickness").val("--select-profile--"); 
		$("#beams-heb-calculator-form #tThickness").val("--select-profile--"); 
		$("#beams-heb-calculator-form #wt-per-mtr").val(""); 
	}
	else{
		$("#beams-heb-calculator-form #height").val(hebBeam[profileSelected][0]);
		$("#beams-heb-calculator-form #width").val(hebBeam[profileSelected][1]);
		$("#beams-heb-calculator-form #sThickness").val(hebBeam[profileSelected][2]);
		$("#beams-heb-calculator-form #tThickness").val(hebBeam[profileSelected][3]);
		$("#beams-heb-calculator-form #wt-per-mtr").val(hebBeam[profileSelected][4].toFixed(2));
	}
}

/*Beams HEB Calculator LOGIC*/
$("#beams-heb-calculator-form .calculate-button").click(function(event) {
	var len = $("#beams-heb-calculator-form #len").val();
	var wtPerMtr = $("#beams-heb-calculator-form #wt-per-mtr").val();
	var totalWt = wtPerMtr*len;
	$("#beams-heb-calculator-form #total-wt").val(totalWt.toFixed(2));
});

//To Disable Beams HEB Calculator
$("#beams-heb-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#beams-heb-calculator .utilities-text").slideToggle();
	$("#beams-heb-calculator-form").slideToggle();
});



//To Enable Hollow Circular Structures Calculator
$("#clickToHollowCircleCalculator").click(function(event) {
	/* Act on the event */
	if($("#hollow-circle-calculator-form").css("display")==="none"){
		$("#hollow-circle-calculator .utilities-text").slideToggle();
		$("#hollow-circle-calculator-form").slideToggle();
	}
});

//Hollow Circular Structures Calculator LOGIC
$("#hollow-circle-calculator-form .calculate-button").click(function(event) {
	var dia = $("#hollow-circle-calculator-form #diameter").val();
	var thickness = $("#hollow-circle-calculator-form #thickness").val();
	var dia2 = dia - 2*thickness;
	var len = $("#hollow-circle-calculator-form #len").val();
	var wtPerMtr = (3.142*(dia*dia- dia2*dia2)/4000000)*7850;
	var totalWt = wtPerMtr*len;
	$("#hollow-circle-calculator-form #wt-per-mtr").val(wtPerMtr.toFixed(3));
	$("#hollow-circle-calculator-form #total-wt").val(totalWt.toFixed(3));
});

//To Disable Hollow Circular Structures Calculator
$("#hollow-circle-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#hollow-circle-calculator .utilities-text").slideToggle();
	$("#hollow-circle-calculator-form").slideToggle();
});





//To Enable Hollow Square/Rectangular Structures Calculator
$("#clickToHollowRectCalculator").click(function(event) {
	/* Act on the event */
	if($("#hollow-rect-calculator-form").css("display")==="none"){
		$("#hollow-rect-calculator .utilities-text").slideToggle();
		$("#hollow-rect-calculator-form").slideToggle();
	}
});

//Hollow Square/Rectangular Structures Calculator LOGIC
$("#hollow-rect-calculator-form .calculate-button").click(function(event) {
	var side1 = $("#hollow-rect-calculator-form #side1").val();
	var side2 = $("#hollow-rect-calculator-form #side2").val();
	var thickness = $("#hollow-rect-calculator-form #thickness").val();
	var len = $("#hollow-rect-calculator-form #len").val();
	var a1 = side1*side2;
	var a2 = (side1-(2*thickness))*(side2-(2*thickness));
	var wtPerMtr = ((a1 - a2)/1000000)*7850;
	var totalWt = wtPerMtr*len;
	$("#hollow-rect-calculator-form #wt-per-mtr").val(wtPerMtr.toFixed(3));
	$("#hollow-rect-calculator-form #total-wt").val(totalWt.toFixed(3));
});


//To Disable Hollow Square/Rectangular Structures Calculator
$("#hollow-rect-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#hollow-rect-calculator .utilities-text").slideToggle();
	$("#hollow-rect-calculator-form").slideToggle();
});


/*To Validate Form*/
document.querySelector("form #submit-button").addEventListener("click", function(){
	var emailId = document.querySelector("#emailId").value;
	var queryMessage = document.querySelector("#queryMessage").value;
	if(emailId!="" && queryMessage!=""){
		alert("Form Submitted");
		document.querySelector("#emailId").value = "";
		document.querySelector("#queryMessage").value= "";
	}
	else
		alert("Please fill All the Required Fields");
});

