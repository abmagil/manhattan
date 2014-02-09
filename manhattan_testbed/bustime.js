var config = require('./config')('local');
var request = require('request');
var http = require('http');
// Glue code to pull information from BusTime.  Presumably I will need to bolster and modularize.

var bustime = {};
routes = [];

bustime.agencies = ["MTA%20NYCT"]; //, "MTABC"
bustime.baseURL = "http://app."+config.target_environment +".obanyc.com";

// Pull a JSON listing of routes.  Response objects have
// shortName: 	human-readable route name
// longName: 	human-readable description of route
// color: 		Color associated with the route.
bustime.getRoutes = function(callback) {
	var raw = "";
	var routeAPI = "/api/where/routes-for-agency/";
	
	bustime.agencies.forEach( function(agency) {
		var options = {
			hostname: "app.dev.obanyc.com" || "app."+config.target_environment +".obanyc.com",
			path: routeAPI + agency +".json?key=" + "TEST" || config.APIKEY,
			method: "GET"
		};

		var req = http.request(options, function(res) {
			console.log("API Call returned status " + res.statusCode);

			res.on('error', function(e) {
				console.log("Error: " + e.message);
			});

			res.on('data', function(chunk) {
				raw += chunk;
			});

			res.on('end', function() {
				var fullroutes = JSON.parse(raw);
				var tmp = fullroutes['data']['list'];	//Just the list of routes
				tmp.forEach( function(entry) {
					routes.push({shortName: entry['shortName'],longName: entry['longName'],color: entry['color']});
				});
				callback(routes);
			});
		});

		req.end();
	});
}

module.exports = bustime;