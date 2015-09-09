$(document).ready(function() {
	// $("nav").slideDown("slow");
	// $('div').hide();
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
		// Displays course statistics
		// $(function () {
		//     $('#course-chart').highcharts({
		//         chart: {
		//             type: 'column'
		//         },
		//         title: {
		//             text: 'Grading Statistics'
		//         },
		//         xAxis: {
		//             categories: [
		//                 '4 (DD)',
		//                 '5 (CD)',
		//                 '6 (CC)',
		//                 '7 (BC)',
		//                 '8 (BB)',
		//                 '9 (AB)',
		//                 '10 (AA)',
		//                 '10 (AP)'
		//             ]
		//         },
		//         yAxis: {
		//             min: 0,
		//             allowDecimals: false,
		//             title: {
		//                 text: 'Number of courses'
		//             }
		//         },
		//         tooltip: {
		//             headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		//             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		//                 '<td style="padding:0"><b>{point.y}</b></td></tr>',
		//             footerFormat: '</table>',
		//             shared: true,
		//             useHTML: true
		//         },
		//         plotOptions: {
		//             column: {
		//                 pointPadding: 0.2,
		//                 borderWidth: 0,
		//                 color: 'gray'
		//             },
		//             series: {
		//                 animation: {
		//                     duration: 4000
		//                 }
		//             }
		//         },
		//         series: [{
		//             name: 'Number of Courses',
		//             data: [0, 1, 2, 3, 9, 9, 11, 1]
		//         }]
		//     });
		// });
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
