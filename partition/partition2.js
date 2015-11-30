var width = 600,
  height = 400,
  color = d3.scale.category20();

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g");

var partition = d3.layout.partition()
  .sort(null)
  .size([width, height])
  .value(function(d) {
    return 1;
  });


d3.json("city_tree.json", function(error, root) {

  var nodes = partition.nodes(root);
  var links = partition.links(nodes);

  var rects = svg.selectAll("g")
    .data(nodes)
    .enter().append("g");

  rects.append("rect")
    .attr("x", function(d) {
      return d.x;
    })
    .attr("y", function(d) {
      return d.y;
    })
    .attr("width", function(d) {
      return d.dx;
    })
    .attr("height", function(d) {
      return d.dy;
    })
    .style("stroke", "#fff")
    .style("fill", function(d) {
      return color((d.children ? d : d.parent).name);
    })
    .on("mouseover", function(d) {
      d3.select(this)
        .style("fill", "yellow");
    })
    .on("mouseout", function(d) {
      d3.select(this)
        .transition()
        .duration(200)
        .style("fill", function(d) {
          return color((d.children ? d : d.parent).name);
        });
    });

  rects.append("text")
    .attr("class", "node_text")
    .attr("transform", function(d, i) {
      return "translate(" + (d.x + 20) + "," + (d.y + 20) + ")";
    })
    .text(function(d, i) {
      return d.name + " " + (d.num || '');
    });
});