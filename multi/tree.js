var w = 1024,
  h = 1024,
  i = 0,
  duration = 500,
  root;

var tree = d3.layout.tree()
  .size([h, w - 160])
  .separation(function(a, b) {
    return a.parent == b.parent ? 10 : 15;
  });

var diagonal = d3.svg.diagonal()
  .projection(function(d) {
    return [d.y, d.x];
  });

// 定义缩放监听器
var zoom = d3.behavior.zoom()
  .scaleExtent([0.1, 3]).on("zoom", function() {
    d3.select("svg g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  });

var drag = d3.behavior.drag()
  .origin(function() {
    var t = d3.transform(d3.select(this).attr("transform"));
    return {
      x: t.translate[0],
      y: t.translate[1]
    };
  })
  .on("drag", function(d) {
    var x = d3.event.x;
    var y = d3.event.y;
    d3.select("svg g").attr("transform", "translate(" + x + "," + y + ")");
  });


var vis = d3.select("#chart").append("svg")
  .attr("width", w)
  .attr("height", h)
  .call(zoom)
  .call(drag)
  .append("g")
  .attr("transform", "translate(40, 20)");

d3.json("math_map_compact.json", function(json) {
  json.x0 = 800;
  json.y0 = 0;
  update(root = json);
});

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse();

  nodes.forEach(function(d) {
    d.y = d.depth * 135;
  });

  // Update the nodes...
  var node = vis.selectAll("g.node")
    .data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + source.y0 + "," + source.x0 + ")";
    });

  nodeEnter.append("image")
    .attr("xlink:href", function(d) {
      return "../font-mfizz/src/svg/apache.svg";
    })
    .attr("x", "-12px") // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
    .attr("y", "-12px")
    .attr("width", "24px") // 设置svg图片大小
    .attr("height", "24px")
    .on("click", click);

  nodeEnter.append("text")
    .attr("x", function(d) {
      return d.children || d._children ? -12 : 12; // 叶子结点向右偏移放在结点后
    })
    .attr("dy", "0em") // 当前字体12px, 偏移12 * 0.35 px
    .attr("text-anchor", function(d) {
      return d.children || d._children ? "end" : "start"; // 文字在偏移点左上角的位置
    })
    .text(function(d) {
      return d.name;
    })
    .style("fill-opacity", 1);

  // Transition nodes to their new position.
  nodeEnter.transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    })
    .style("opacity", 1)

  node.transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    })
    .style("opacity", 1);


  node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .style("opacity", 1e-6)
    .remove();

  // Update the links...
  var link = vis.selectAll("path.link")
    .data(tree.links(nodes), function(d) {
      return d.target.id;
    });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function(d) {
      var o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    })
    .transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
      var o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}