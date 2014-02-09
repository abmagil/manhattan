bustime = require("../bustime");
/*
 * GET home page.
 */

exports.index = function(req, res){
	 var options;
	 
	 bustime.getRoutes( function(result) { 
	 	var returnedData =result
	 	console.log("TMP: "+returnedData);
		options = { 
			title: 'Express',
			content: returnedData.toString() || "No Data Retrieved"
		};
	 });

	 console.log(options); //REMOVE

  	res.render('index', options);
};