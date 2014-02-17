bustime = require("../bustime")();
/*
 * GET home page.
 */

exports.index = function(req, res){
	 bustime.getRoutes( function(result) { 
	 	for(var i = 0; i < result.length; i++) {
	 		route = result[i];
	 	}
	 	var options = { 
			title: 'Express',
			content: result || "No Data Retrieved"
		};

  		res.render('index', options);
  		// console.log(options);
	 });
};

exports.busRoute = function(req, res) {
	console.log(req.params.route);
	res.render('index', {title: "Express", content: null});
}