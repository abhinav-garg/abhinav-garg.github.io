$(document).ready(function() {
	// $("nav").slideDown("slow");
	// $('div').hide();
	// var url = "";
	// $.ajax({
	// 	type: "POST",
	// 	url: url,
	// 	data: 
	// });
	$("#loading").hide();
	var duration = 1500;
	$("#landing-text").text("Hi!");
	$("span#landing-text").fadeIn(duration, function() {
		$("span#landing-text").fadeOut(duration, function() {
			$("#landing-text").text("Welcome to my page");
			$("span#landing-text").fadeIn(duration, function() {
				$("span#landing-text").fadeOut(duration, function() {
					$("div#landing").fadeOut(duration);
				});
			});
		});
	});
	$("#landing").click(function(){
		$("#landing").hide();
	});
	var last = $("#home");
	var lastButton = $("#home-nav");
	var buttonHighlight = "rgba(100,100,100,0.5)";
	$("#home-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#home-nav").css("background-color", buttonHighlight);
		$("#home").fadeIn("slow");
		last = $("#home");
		lastButton = $("#home-nav");
	});
	$("#courses-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#courses-nav").css("background-color", buttonHighlight);
		$("#courses").fadeIn("slow");
		last = $("#courses");
		lastButton = $("#courses-nav");

		// Displays CPI over the semesters
		$(function () {
		    $('#cpi-chart').highcharts({
		        title: {
		            text: 'Performance over the semesters'
		        },
		        subtitle: {
		            text: ''
		        },
		        xAxis: {
		        	title: {
		        		text: 'Semester'
		        	},
		            allowDecimals: false,
		            // labels: {
		            //     formatter: function () {
		            //         return this.value; // clean, unformatted number for year
		            //     }
		            // }
		            categories: ['1', '2', '3', '4', '5', '6']
		        },
		        yAxis: {
		        	min: 8,
		        	max: 10,
		            title: {
		                text: 'Grade Point'
		            },
		            allowDecimals: true,
			        shared: true,
		            useHTML: true
		        },
		        tooltip: {
		            headerFormat: '{point.y} - ', 
		            pointFormat: '{series.name}'
		        },
		        // Set the duration of animation
		        plotOptions: {
		            series: {
		                animation: {
		                    duration: 1500
		                }
		            }
		        },
		        series: [{
		            name: 'SPI',
		            data: [9.39, 8.94, 8.68, 9.58, 8.56, 9.39]
		        }, {
		            name: 'CPI',
		            data: [9.39, 9.16, 8.97, 9.1, 9.0, 9.05]
		        }]
		    });
		});
	});
	$("#projects-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#projects-nav").css("background-color", buttonHighlight);
		$("#projects").fadeIn("slow");
		last = $("#projects");
		lastButton = $("#projects-nav");

	});
	$("#internships-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#internships-nav").css("background-color", buttonHighlight);
		$("#internships").fadeIn("slow");
		last = $("#internships");
		lastButton = $("#internships-nav");

	});
	$("#contact-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#contact-nav").css("background-color", buttonHighlight);
		$("#contact").fadeIn("slow");
		last = $("#contact");
		lastButton = $("#contact-nav");

	});
	$("#resume-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#resume-nav").css("background-color", buttonHighlight);
		$("#resume").fadeIn("slow");
		last = $("#resume");
		lastButton = $("#resume-nav");

	});
	$("#blog-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide();
		lastButton.css("background-color", "");
		$("#blog-nav").css("background-color", buttonHighlight);
		$("#blog").fadeIn("slow");
		last = $("#blog");
		lastButton = $("#blog-nav");

	});
});
