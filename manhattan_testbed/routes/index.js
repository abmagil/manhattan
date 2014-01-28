
/*
 * GET home page.
 */

exports.index = function(req, res){
	var options = { 
		title: 'Express',
		content: "WORDS WORDS WORDS"
	}

  	res.render('index', options);
};