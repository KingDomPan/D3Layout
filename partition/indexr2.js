var w = 700,
  h = 700,
  x = d3.scale.linear().range([0, w]),
  y = d3.scale.linear().range([0, h]),
  color = d3.scale.category20();

var vis = d3.select("#body").append("div")
  .style("width", "100%")
  .style("height", "100%")
  .append("svg")
  .attr("width", '100%')
  .attr("height", '100%')
  .attr("viewBox", "0 0 " + w + " " + h);

var partition = d3.layout.partition()
  .value(function(d) {
    return d.num;
  });

d3.json("city_tree.json", function(root) {
  var g = vis.selectAll("g")
    .data(partition.nodes(root))
    .enter().append("g")
    .attr("transform", function(d) {
      return "translate(" + x(d.y) + "," + y(d.x) + ")";
    })
    .on("click", click);

  var kx = w / root.dx,
    ky = h / 1;

  g.append("rect")
    .attr("width", root.dy * kx)
    .attr("height", function(d) {
      return d.dx * ky;
    })
    .attr("class", function(d) {
      return d.children ? "parent" : "child";
    })
    .style("fill", function(d) {
      return color((d.children ? d : d.parent).name);
    });

  g.append("text")
    .attr("transform", transform)
    .attr("dy", ".35em")
    .style("opacity", function(d) {
      return d.dx * ky > 12 ? 1 : 0;
    })
    .text(function(d) {
      return d.name;
    })

  d3.select(window)
    .on("click", function() {
      click(root);
    })

  function click(d) {
    if (!d.children) return;

    kx = (d.y ? w - 40 : w) / (1 - d.y);
    ky = h / d.dx;
    x.domain([d.y, 1]).range([d.y ? 40 : 0, w]);
    y.domain([d.x, d.x + d.dx]);

    var t = g.transition()
      .duration(d3.event.altKey ? 7500 : 750)
      .attr("transform", function(d) {
        return "translate(" + x(d.y) + "," + y(d.x) + ")";
      });

    t.select("rect")
      .attr("width", d.dy * kx)
      .attr("height", function(d) {
        return d.dx * ky;
      });

    t.select("text")
      .attr("transform", transform)
      .style("opacity", function(d) {
        return d.dx * ky > 12 ? 1 : 0;
      });

    d3.event.stopPropagation();
  }

  function transform(d) {
    return "translate(8," + d.dx * ky / 2 + ")";
  }
});