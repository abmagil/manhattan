bustime = require("../bustime");
/*
 * GET home page.
 */

exports.index = function(req, res){
	 var options;
	 
	 bustime.getRoutes( function(result) { 
	 	console.log("result:", result);
	 	options = { 
			title: 'Express',
			content: result || "No Data Retrieved"
		};

  		res.render('index', options);
  		console.log(options)
	 });
};