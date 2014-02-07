var config = require('./config')('local');
var request = require('request');
// Glue code to pull information from BusTime.  Presumably I will need to bolster and modularize.

var bustime = {};

bustime.agencies = ["MTA%20NYCT", "MTABC"];
bustime.baseURL = "http://app."+config.target_environment +".obanyc.com";

// Pull a JSON listing of routes.  Response objects have
// shortName: 	human-readable route name
// longName: 	human-readable description of route
// color: 		Color associated with the route.
bustime.getRoutes = function() {
	routes = [];
	var routeAPI = "/api/where/routes-for-agency/";
	var host = bustime.baseURL;
	
	bustime.agencies.forEach(function(agency) {
		var path = routeAPI + agency +".json?key=" + config.APIKEY;

		request(host + path, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var fullroutes = JSON.parse(body);
				var tmp = fullroutes['data']['list'];	//Just the list of routes
				tmp.forEach( function(entry) {
					console.log(entry);
					routes.push({shortName: entry['shortName'],longName: entry['longName'],color: entry['color']});
				});
			}
			 else {
			  	console.log(error);
			 }
		});
	});
};

module.exports = bustime;