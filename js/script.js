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
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#home-nav").toggleClass("active");
		$("#home").fadeIn("slow");
		last = $("#home");
		lastButton = $("#home-nav");
	});
	$("#courses-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#courses-nav").toggleClass("active");
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
		            categories: ['1', '2', '3', '4', '5', '6', '7']
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
		            pointFormat: 'Semester {point.category} - {series.name}'
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
		            data: [9.39, 8.94, 8.68, 9.58, 8.56, 9.39, 9.4, 9.74, 10]
		        }, {
		            name: 'CPI',
		            data: [9.39, 9.16, 8.97, 9.1, 9.0, 9.05, 9.1, 9.18, 9.27]
		        }]
		    });
		});
	});
	$("#projects-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#projects-nav").toggleClass("active");
		$("#projects").fadeIn("slow");
		last = $("#projects");
		lastButton = $("#projects-nav");

	});
	$("#internships-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#internships-nav").toggleClass("active");
		$("#internships").fadeIn("slow");
		last = $("#internships");
		lastButton = $("#internships-nav");

	});
	$("#contact-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#contact-nav").toggleClass("active");
		$("#contact").fadeIn("slow");
		last = $("#contact");
		lastButton = $("#contact-nav");

	});
	$("#resume-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#resume-nav").toggleClass("active");
		$("#resume").fadeIn("slow");
		last = $("#resume");
		lastButton = $("#resume-nav");

	});
	$("#blog-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#blog-nav").toggleClass("active");
		$("#blog").fadeIn("slow");
		last = $("#blog");
		lastButton = $("#blog-nav");

	});
	$("#learning-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#learning-nav").toggleClass("active");
		$("#learning").fadeIn("slow");
		last = $("#learning");
		lastButton = $("#learning-nav");

	});
	$("#running-nav").click(function(){
		$("#landing").hide(); // If a button is clicked, the landing text will go away
		last.hide(); lastButton.removeClass("active");
		lastButton.css("background-color", "");
		$("#running-nav").toggleClass("active");
		$("#running").fadeIn("slow");
		last = $("#running");
		lastButton = $("#running-nav");

		// Displays CPI over the semesters
		$(function () {
		    $('#running-chart').highcharts({
		        title: {
		            text: 'Running'
		        },
		        subtitle: {
		            text: ''
		        },
		        xAxis: {
		        	title: {
		        		text: 'Date'
		        	},
		            allowDecimals: false,
		            // labels: {
		            //     formatter: function () {
		            //         return this.value; // clean, unformatted number for year
		            //     }
		            // }
		            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
		        },
		        yAxis: {
		        	min: 0,
		        	max: 15,
		            title: {
		                text: 'Distance (km)'
		            },
		            allowDecimals: true,
			        shared: true,
		            useHTML: true
		        },
		        tooltip: {
		            headerFormat: '{point.y} km - ', 
		            pointFormat: '{point.category} {series.name}'
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
		            name: 'January',
		            data: [1.68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.68, 0, 2.41, 1.43, 0, 0, 0, 2.36, 0, 3.2, 1.53, 2.06, 1.76, 3.51, 5.12, 4.02, 4.03, 3.63, 3.1, 0, 2.02]
		        }, {
		            name: 'February',
		            data: [0, 0, 3.36, 3.05, 0, 2.03, 0, 0, 0, 5, 5.3, 5.07, 5, 5.23, 5.02, 5.21, 5.03, 5.02, 5.02, 6.75, 6.21, 6.29, 6.27, 6.25, 0, 0, 6.31, 6.54, 6.9]
		        }, {
		            name: 'March',
		            data: [6.62, 0, 0, 3.1, 0, 11.6, 0, 0]
		        }]
		    });
		});
	});
});
