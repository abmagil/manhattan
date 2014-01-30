// Caged from http://eyeseast.github.io/visible-data/2013/08/26/responsive-d3/
var margin = {top: 10, left: 10, bottom: 10, right: 10}
  , width = parseInt(d3.select('#main').style('width'))
  , width = width - margin.left - margin.right
  , mapRatio = .45
  , height = width * mapRatio;

  console.log("width: " + width );
  console.log("height: " + height );

var canvas = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("class", "span8");
      
var projection = d3.geo.mercator()
      .center([-73.94, 40.70])
      .scale(70000)
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
            .attr("class", function(d){ return d.properties.BoroName; })
            .attr("d", path);
});