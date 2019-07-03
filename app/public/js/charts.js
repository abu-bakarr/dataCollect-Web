 $(document).ready(function() {
   
	// rice 
	var dataPointsA = []
   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/riceMarketApi',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsA.push({
           label: data[i].district,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("ricechart", {
				 animationEnabled: true,
				 title:{
					text: "Rice Prices By District",
					fontSize: 20
				},
				theme: "light2",
 				axisY:{
					title: "Price",
					titleFontSize: 15,
					valueFormatString:"LE #######.00"
         		},
 			axisX:{
						title: "Districts",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
            type: "column",
			xValueFormatString:'string',
			yValueFormatString:"LE #######.00",
            name: "District Market Prices",
            dataPoints: dataPointsA
         }]
       });
       chart.render();
     }
	 });

	// cacao
	var dataPointsB = []
   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/cacaoMarketApi',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsB.push({
           label: data[i].district,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("cacaochart", {
				 animationEnabled: true,
				 title:{
					text: "Cacao Prices By District",
					fontSize: 20
				},
				theme: "light2",
 				axisY:{
						title: "Price",
						titleFontSize: 15,
            valueFormatString:"LE #######.00"
         },
 				axisX:{
						title: "Districts",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
			type: "pie",
			startAngle: 25,
			toolTipContent: "<b>{label}</b>: {y}%",
			showInLegend: "true",
			legendText: "{label}",
			indexLabelFontSize: 16,
			indexLabel: "{label} - {y}%",
            // type: "rangeColumn",
	 		xValueFormatString:'string',
	 		yValueFormatString:"LE #######.00",
            name: "District Market Prices",
            dataPoints: dataPointsB
         }]
       });
       chart.render();
     }
	 });

	 // coffee
	var dataPointsC = []
	$.ajax({
	  type: 'GET',
	  url: 'http://localhost:3000/api/coffeeMarketApi',
	  dataType: 'json',
	  success: function(data) {
		for (var i = 0; i < data.length; i++) {
		  dataPointsC.push({
			label: data[i].district,
			y: data[i].price
		  });
		}
 
		var chart = new CanvasJS.Chart("coffeechart", {
				  animationEnabled: true,
				  title:{
					 text: "Coffee Prices By District",
					 fontSize: 20
				 },
				 theme: "light2",
				  axisY:{
						 title: "Price",
						 titleFontSize: 15,
			 valueFormatString:"LE #######.00"
		  },
				  axisX:{
						 title: "Districts",
						 titleFontSize: 15,
			 valueFormatString:'string'
		  },
		  data: [{
			 type: "column",
						  xValueFormatString:'string',
						  yValueFormatString:"LE #######.00",
			 name: "District Market Prices",
			 dataPoints: dataPointsC
		  }]
		});
		chart.render();
	  }
	});
	
	// palm oil 
	var dataPointsD = []
   $.ajax({
     type: 'GET',
     url: 'http://localhost:3000/api/palmoilMarketApi',
     dataType: 'json',
     success: function(data) {
       for (var i = 0; i < data.length; i++) {
         dataPointsD.push({
           label: data[i].district,
           y: data[i].price
         });
       }

       var chart = new CanvasJS.Chart("palmoilchart", {
				 animationEnabled: true,
				 title:{
					text: "Palm oil Prices By District",
					fontSize: 20
				},
				theme: "light2",
 				axisY:{
						title: "Price",
						titleFontSize: 15,
            valueFormatString:"LE #######.00"
         },
 				axisX:{
						title: "Districts",
						titleFontSize: 15,
            valueFormatString:'string'
         },
         data: [{
            type: "column",
	 					xValueFormatString:'string',
	 					yValueFormatString:"LE #######.00",
            name: "District Market Prices",
            dataPoints: dataPointsD
         }]
       });
       chart.render();
     }
	 });

	 // cassava
	var dataPointsE = []
	$.ajax({
	  type: 'GET',
	  url: 'http://localhost:3000/api/cassavaMarketApi',
	  dataType: 'json',
	  success: function(data) {
		for (var i = 0; i < data.length; i++) {
		  dataPointsE.push({
			label: data[i].district,
			y: data[i].price
		  });
		}
 
		var chart = new CanvasJS.Chart("cassavachart", {
				  animationEnabled: true,
				  title:{
					 text: "Cassava Prices By District",
					 fontSize: 20
				 },
				 theme: "light2",
				  axisY:{
						 title: "Price",
						 titleFontSize: 15,
			 valueFormatString:"LE #######.00"
		  },
				  axisX:{
						 title: "Districts",
						 titleFontSize: 15,
			 valueFormatString:'string'
		  },
		  data: [{
			 type: "column",
						  xValueFormatString:'string',
						  yValueFormatString:"LE #######.00",
			 name: "District Market Prices",
			 dataPoints: dataPointsE
		  }]
		});
		chart.render();
	  }
	  });
	

	//  var dataPointsA = []
	//  $.ajax({
	//    type: 'GET',
	//    url: 'http://localhost:3000/api/market_data_api',
	//    dataType: 'json',
	//    success: function(data) {
	// 	 for (var i = 0; i < data.length; i++) {
	// 	   dataPointsA.push({
	// 		 label: data[i].product,
	// 		 y: data[i].price
	// 	   });
	// 	 }
  
	// 	 var chart = new CanvasJS.Chart("farmerschart", {
	// 			   animationEnabled: true,
	// 			   title:{
	// 				  text: "Product Prices",
	// 				  fontSize: 20
	// 			  },
	// 			  theme: "light2",
	// 			   axisY:{
	// 					  title: "Price",
	// 					  titleFontSize: 15,
	// 		  valueFormatString:"LE #######.00"
	// 	   },
	// 			   axisX:{
	// 					  title: "Products",
	// 					  titleFontSize: 15,
	// 		  valueFormatString:'string'
	// 	   },
	// 	   data: [{
	// 		  type: "column",
	// 					   xValueFormatString:'string',
	// 					   yValueFormatString:"LE #######.00",
	// 		  name: "Product Market Prices",
	// 		  dataPoints: dataPointsA
	// 	   }]
	// 	 });
	// 	 chart.render();
	//    }
	//    });


	//  var dataPointsB = [];
	// $.ajax({
	// 	type: 'GET',
	// 	url: 'http://localhost:3000/api/farmer_dis_api',
	// 	dataType: 'json',
	// 	success: function(data) {
	// 		for (var i = 0; i < data.length; i++) {
	// 			dataPointsB.push({
	// 				label: data[i].district,
	// 				y: data[i].nofarmers
	// 			});
	// 		}

	// 		var chart = new CanvasJS.Chart("cropchart", {
	// 			animationEnabled: true,
	// 			title: {
	// 				text: "Tol. Numbers of Farmers",
	// 				fontSize: 20
	// 			},
	// 			theme: "light2",
	// 			axisY: {
	// 				title: "No. Farmers",
	// 				titleFontSize: 15,
	// 				valueFormatString: "#######"
	// 			},
	// 			axisX: {
	// 				title: "Districts",
	// 				titleFontSize: 15,
	// 				valueFormatString: 'string'
	// 			},
	// 			data: [{
	// 				type: "spline",
	// 				xValueFormatString: 'string',
	// 				yValueFormatString: "#######",
	// 				name: "Farmers by District Chart",
	// 				dataPoints: dataPointsB
	// 			}]
	// 		});
	// 		chart.render();
	// 	}
	// });

});
	 
// 	 // crop chart
// 	var chart = new CanvasJS.Chart("cropchart", {
// 		animationEnabled: true,
// 		title:{
// 			text: "Daily High Temperature at Different Locations",
// 			fontSize: 20
// 		},
// 		axisX: {
// 			valueFormatString: "DD MMM,YY"
// 		},
// 		axisY: {
// 			title: "Temperature (in °C)",
// 			includeZero: false,
// 			suffix: " °C"
// 		},
// 		legend:{
// 			cursor: "pointer",
// 			fontSize: 16,
// 			itemclick: toggleDataSeries
// 		},
// 		toolTip:{
// 			shared: true
// 		},
// 		data: [{
// 			name: "Makeni",
// 			type: "spline",
// 			yValueFormatString: "#0.## °C",
// 			showInLegend: true,
// 			dataPoints: [
// 				{ x: new Date(2019,4,5), y: 31 },
// 				{ x: new Date(2019,4,6), y: 31 },
// 				{ x: new Date(2019,4,7), y: 29 },
// 				{ x: new Date(2019,4,8), y: 29 },
// 				{ x: new Date(2019,4,9), y: 31 },
// 				{ x: new Date(2019,4,10), y: 30 },
// 				{ x: new Date(2019,4,11), y: 29 }
// 			]
// 		},
// 		{
// 			name: "Bo",
// 			type: "spline",
// 			yValueFormatString: "#0.## °C",
// 			showInLegend: true,
// 			dataPoints: [
// 				{ x: new Date(2019,4,5), y: 20 },
// 				{ x: new Date(2019,4,6), y: 20 },
// 				{ x: new Date(2019,4,7), y: 25 },
// 				{ x: new Date(2019,4,8), y: 25 },
// 				{ x: new Date(2019,4,9), y: 25 },
// 				{ x: new Date(2019,4,10), y: 25 },
// 				{ x: new Date(2019,4,11), y: 25 }
// 			]
// 		},
// 		{
// 			name: "Kenema",
// 			type: "spline",
// 			yValueFormatString: "#0.## °C",
// 			showInLegend: true,
// 			dataPoints: [
// 				{ x: new Date(2019,4,5), y: 22 },
// 				{ x: new Date(2019,4,6), y: 19 },
// 				{ x: new Date(2019,4,7), y: 23 },
// 				{ x: new Date(2019,4,8), y: 24 },
// 				{ x: new Date(2019,4,9), y: 24 },
// 				{ x: new Date(2019,4,10), y: 23 },
// 				{ x: new Date(2019,4,11), y: 23 }
// 			]
// 		}]
// 	});
// 	chart.render();

// 	function toggleDataSeries(e){
// 		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
// 			e.dataSeries.visible = false;
// 		}
// 		else{
// 			e.dataSeries.visible = true;
// 		}
// 		chart.render();
// 	}

	

// });

// farmer Display by district chart

