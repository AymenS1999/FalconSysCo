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

/*To SWITCH between the UTILITIES*/

//For PIPE CALCULATOR
$("#activate-pipe-calculator").click(function(event) {
	/* Act on the event */
	if($("#pipe-calculator").css("display") === "none"){
		$("#activate-pipe-calculator").addClass('active');
		$("#activate-pipe-chart").removeClass("active");
		$("#activate-steel-sheet-calculator").removeClass('active');
		$("#pipe-calculator").css("display","block");
		$("#pipe-chart").css("display", "none");
		$("#steel-sheet-calculator").css("display","none");
	}
});

//For PIPE CHART
$("#activate-pipe-chart").click(function(event) {
	/* Act on the event */
	if($("#pipe-chart").css("display") === "none"){
		$("#activate-pipe-chart").addClass('active');
		$("#activate-pipe-calculator").removeClass('active');
		$("#activate-steel-sheet-calculator").removeClass('active');
		
		//The utility to show
		$("#pipe-chart").css("display","block");
		
		//The utilities to be hidden
		$("#pipe-calculator").css("display", "none");
		$("#steel-sheet-calculator").css("display","none");
	}
});

//For STEEL SHEETS and PLATES
$("#activate-steel-sheet-calculator").click(function(event){
	if($("#steel-sheet-calculator").css("display") === "none"){
		$("#activate-steel-sheet-calculator").addClass('active');
		$("#activate-pipe-calculator").removeClass('active');
		$("#activate-pipe-chart").removeClass("active");
		
		//The utility to show
		$("#steel-sheet-calculator").css("display","block");
		
		//The utilities to be hidden
		$("#pipe-calculator").css("display", "none");
		$("#pipe-chart").css("display","none");
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

//If you want OPTIONS to be ORDERED then use this INSTEAD of using "Object.keys(npsScheduleWallThickness[npsSelected])"
// var availableSchedules = {
// 	//From NPS 1/8" to 3/8"
// 	'1' : ['10/10S', 'STD/40/40S', 'XS/80/80S'],
// 	//From NPS 1/2" Till 3"
// 	'2' : ['5/5S', '10/10S', 'STD/40/40S', 'XS/80/80S', '160', 'XX'],
// 	//For NPS 3-1/2"
// 	'3' : ['5/5S', '10/10S', 'STD/40/40S', 'XS/80/80S', 'XX'],
// 	//From NPS 4 to 6
// 	'4' : ['5/5S', '10/10S', 'STD/40/40S', 'XS/80/80S', '120', '160', 'XX'],
// 	//For NPS 8"
// 	'5' : ['5/5S', '10/10S', '20', '30', 'STD/40/40S', '60', 'XS/80/80S', '100' , '120', '140', 'XX','160'],
// 	//For 10"
// 	'6' : ['5S', '10S', '20', '30', 'STD/40/40S', 'XS/60/80S', '80', '100', '120', '140/XX', '160'],
// 	//For 12 and 14
// 	'7' : ['10S', '10', '20', '30', 'STD/40S', '40', 'XS/80S', '60', '80', '100', '120', '140', '160'],
// 	//For 16"
// 	'8' : ['10S', '10', '20', '30', 'STD/40S', 'XS/40/80S', '60', '80', '100', '120', '140', '160'],
// 	//For 18"
// 	'9' : ['10S', '10', '20', 'STD/40S', '30', 'XS/80S', '40', '60', '80', '100', '120', '140', '160'],
// 	//For 20"
// 	'10' : ['10S', '10', 'STD/20/40S', 'XS/30/80S', '40', '60', '80', '100', '120', '140', '160'],
// 	//For 22"
// 	'11' : ['10S', '10', 'STD/20/40S', 'XS/30/80S', '60', '80', '100', '120', '140', '160'],
// 	//For 24"
// 	'12' : ['10/10S', 'STD/20/40S', 'XS/80S', '30', '40', '60', '80', '100', '120', '140', '160'],
// 	//For 26"
// 	'13' : ['10', 'STD/40S', 'XS/80S'],
// 	//For 28"
// 	'14' : ['10', 'STD/40S', 'XS/20/80S', '30'],
// 	//For 30"
// 	'15' : ['10', 'STD/40S', 'XS/20/80S', '30'],
// 	//For 32"
// 	'16' : ['10', 'STD/40S', 'XS/20/80S', '30'],
// 	//For 34"
// 	'17' : ['10', 'STD', 'XS/20', '30', '40'],
// 	//For 36"
// 	'18' : ['10', 'STD', 'XS'],
// 	//For 42" to 48"
// 	'19' : ['STD', 'XS'],
// 	//For 48"
// 	'20' : ['STD', 'XS'],
// };

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


// To go Toggle Back (Disable) Pipe Calculator
$("#pipe-calculator-form .back-button").click(function(event) {
	/* Act on the event */
	$("#pipe-calculator .utilities-text").slideToggle();
	$("#pipe-calculator-form").slideToggle();
});


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

