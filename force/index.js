var width = 960,
  height = 500,
  radius = 6;

var fill = d3.scale.category20();

var force = d3.layout.force()
  .charge(-120)
  .linkDistance(30)
  .size([width, height]);

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
    .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

d3.json("graph.json", function(error, json) {
  if (error) throw error;

  var link = svg.selectAll("line")
    .data(json.links)
    .enter().append("line")
    .attr("marker-end", "url(#end)");

  var node = svg.selectAll("circle")
    .data(json.nodes)
    .enter().append("circle")
    .attr("r", radius - .75)
    .style("fill", function(d) {
      return fill(d.group);
    })
    .style("stroke", function(d) {
      return d3.rgb(fill(d.group)).darker();
    });

  force
    .nodes(json.nodes)
    .links(json.links)
    .on("tick", tick)
    .start();

  function tick(e) {
    var k = 6 * e.alpha;

    // Push sources up and targets down to form a weak tree.
    link
      .each(function(d) {
        d.source.y -= k, d.target.y += k;
      })
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

    node
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }
});