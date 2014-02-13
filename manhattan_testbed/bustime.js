var config = require('./config')('local');
var request = require('request');
var http = require('http');
// Glue code to pull information from BusTime.  Presumably I will need to bolster and modularize.

var bustime = {};

bustime.agencies = ["MTA%20NYCT"]; //, "MTABC"
bustime.baseURL = "http://app."+config.target_environment +".obanyc.com";

// Pull a JSON listing of routes.  Response objects have
// shortName: 	human-readable route name
// longName: 	human-readable description of route
// color: 		Color associated with the route.
bustime.getRoutes = function(callback) {
	var routeAPI = "/api/where/routes-for-agency/";
	
	bustime.agencies.forEach( function(agency) {
		var options = {
			hostname: "app.dev.obanyc.com" || "app."+config.target_environment +".obanyc.com",
			path: routeAPI + agency +".json?key=" + "TEST" || config.APIKEY,
			method: "GET"
		};

		var req = http.request(options, function(res) {
			var raw = "";
			routes = [];
			
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
					routes.push({ 	shortName: entry['shortName'],
							longName: entry['longName'],
							color: '#' + entry['color']
					});
				});
				routes.sort(function(a,b) {
					//Split into text and numeric portions
					  r = /([a-zA-Z]*)([0-9]*)/;
					  matchA = r.exec(a['shortName']);
					  matchB = r.exec(b['shortName']);
					  //If can sort on letter, do so
					  if (matchA[1] < matchB[1])
						return -1;
					  if (matchA[1] > matchB[1])
						return 1;
					//If letters match, coerce numeric portion to number and compare
					aNum = parseInt(matchA[2]);
					bNum = parseInt(matchB[2]);
					return aNum - bNum;
				});
				callback(routes);
			});
		});

		req.end();
	});
}

module.exports = bustime;