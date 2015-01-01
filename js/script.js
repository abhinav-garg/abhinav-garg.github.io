$(document).ready(function() {
	// $("nav").slideDown("slow");
	// $('div').hide();
	var last = $("#home");
	$("#home-nav").click(function(){
		last.hide();
		$("#home").fadeIn("slow");
		last = $("#home");
	});
	$("#courses-nav").click(function(){
		last.hide();
		$("#courses").fadeIn("slow");
		last = $("#courses");
	});
	$("#projects-nav").click(function(){
		last.hide();
		$("#projects").fadeIn("slow");
		last = $("#projects");
	});
	$("#internships-nav").click(function(){
		last.hide();
		$("#internships").fadeIn("slow");
		last = $("#internships");
	});
	$("#contact-nav").click(function(){
		last.hide();
		$("#contact").fadeIn("slow");
		last = $("#contact");
	});
	$("#resume-nav").click(function(){
		last.hide();
		$("#resume").fadeIn("slow");
		last = $("#resume");
	});
});