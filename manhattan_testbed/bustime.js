// Glue code to pull information from BusTime.  Presumably I will need to bolster and modularize.

var bustime = {};

bustime.agencies = ["MTA NYCT", "MTABC"];
bustime.baseURL = "http://app.dev.obanyc.com";

// Pull a JSON listing of routes.  Response objects have
// shortName: 	human-readable route name
// longName: 	human-readable description of route
// color: 		Color associated with the route.
bustime.getRoutes = function() {
	var routeAPI = "/api/where/routes-for-agency/";
	var callURL = this.baseURL + routeAPI;
	console.log(callURL);
};

module.exports.bustime = bustime;