bustime = require("../bustime");
/*
 * GET home page.
 */

exports.index = function(req, res){
	 var options;
	 
	 bustime.getRoutes( function(result) { 
	 	for(var i = 0; i < result.length; i++) {
	 		route = result[i];
	 	}
	 	options = { 
			title: 'Express',
			content: result || "No Data Retrieved"
		};

  		res.render('index', options);
  		// console.log(options);
	 });
};