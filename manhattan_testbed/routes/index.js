bustime = require("../bustime");
/*
 * GET home page.
 */

exports.index = function(req, res){
	var options = { 
		title: 'Express',
		content: bustime.bustime.getRoutes()
	}

  	res.render('index', options);
};