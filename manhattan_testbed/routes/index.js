bustime = require("../bustime");
/*
 * GET home page.
 */

exports.index = function(req, res){
	var options = { 
		title: 'Express',
		content: bustime.getRoutes() || "No Data Retrieved"
	}

  	res.render('index', options);
};