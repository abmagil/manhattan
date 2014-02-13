// Caged from http://eyeseast.github.io/visible-data/2013/08/26/responsive-d3/
var margin = {top: 10, left: 10, bottom: 10, right: 10}
  , width = parseInt(d3.select('#main').style('width'))  - margin.left - margin.right
    , mapRatio = .75
  , height = width * mapRatio;

console.log(width);
console.log(height);

var canvas = d3.select("#main").append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", "0 0 " + width  + " " + height);
      
var projection = d3.geo.mercator()
      .center([-73.94, 40.70])
      .scale(width * 80)
      .translate([(width) / 2, (height)/2]);
      
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
            .attr("class", function(d){ return d.properties.BoroName + " borough"; })
            .attr("data-code", function(d) {return d.properties.BoroCode})
            .attr("d", path)
            .on("click", function() {console.log(d3.select(this).attr("data-code"))});  //Will eventually need this to filter
});