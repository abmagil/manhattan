var height = 700;
var width = 2000;

var canvas = d3.select("body").append("svg")
      .attr("width", height)
      .attr("height", width);
      
var projection = d3.geo.mercator()
      .center([-73.94, 40.70])
      .scale(70000)
      .translate([(width) / 4, (height)/2]);
      
var path = d3.geo.path().projection(projection);

d3.json("javascripts/nybb.geojson", function (data) {

      var path = d3.geo.path()
            .projection(projection);
      
      var g = canvas.append("g");
      
      g.append("g")
            .attr("id", "boroughs")
            .selectAll(".state")
            .data(data.features)
            .enter().append("path")
            .attr("class", function(d){ return d.properties.BoroName; })
            .attr("d", path);
});