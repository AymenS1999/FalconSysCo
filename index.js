
// Changing ACTIVE link when CLICKED
$(".navbar-nav a").on("click",function(){
	$(".navbar-nav").find("li.active").removeClass("active");
	$(this).parent().addClass("active");
});


// Changing ACTIVE link when SCROLLED
$(document).ready(function(){
	$("body").scrollspy({
		target : "#title",
	});
});

$(window).scroll(function(){
	$(".navbar-nav").find("li.active").removeClass("active");
	$(this).parent().addClass("active");
});



document.querySelector("form button").addEventListener("click", function(){
	var name = document.querySelector("#fname").value +" "+ document.querySelector("#lname").value;
	var emailId = document.querySelector("#emailId").value;
	if(name!="" && emailId!=""){
		alert("Form Submitted");
		document.querySelector("#fname").value = "";
		document.querySelector("#lname").value = "";
		document.querySelector("#emailId").value = "";
	}
	else
		alert("Please fill All the Required Fields");
});

