var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
  },
  width = 960; //$(window).width() - margin.right - margin.left,
height = 800; //$(window).height() - margin.top - margin.bottom;

var i = 0,
  duration = 750,
  root;

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function(d) {
    return [d.y, d.x];
  });

var svg = d3.select("body").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.json("math_map_compact.json", function(json) {
  root = json;
  root.x0 = height / 2;
  root.y0 = 0;
  // root.children.forEach(collapse);
  update(root);
});

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
    d.y = d.depth * 180;
  });

  // Update the nodes...
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + source.y0 + "," + source.x0 + ")";
    });

  nodeEnter.append("image")
    .attr("xlink:href", function(d) {
      return "../font-mfizz/src/svg/java.svg";
    })
    .attr("x", "-12px") // 因此svg图片大小的关系导致位置和text不协调, 进行当前位置的偏移
    .attr("y", "-12px")
    .attr("width", "24px") // 设置svg图片大小
    .attr("height", "24px")
    .on("click", function(d) {
      toggle(d);
      update(d);
    });

  nodeEnter.append("text")
    .attr("x", function(d) {
      return d.children || d._children ? -12 : 12;
    })
    .attr("dy", ".35em")
    .attr("text-anchor", function(d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function(d) {
      return d.name;
    })
    .style("fill-opacity", 1);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  nodeExit.select("text")
    .style("fill-opacity", 1);

  // Update the links...
  var link = svg.selectAll("path.link")
    .data(links, function(d) {
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
    });

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

  // FLOWLINK
  // Enter any new links at the parent's previous position.
  var link2 = svg.selectAll("path.link2")
    .data(links, function(d) {
      return d.target.id;
    });

  link2.enter().insert("path", "g")
    .attr("class", "link2")
    .style("fill", "none")
    .style("stroke-width", "1.5px")
    .attr("d", function(d) {
      var o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    });

  // Transition links to their new position.
  link2
    .attr("d", diagonal)
    //.transition()
    //.duration(duration)
    //.each("end", function() {
      // d3.select(this)
      .call(transition);
    //})

  // Transition exiting nodes to the parent's new position.
  link2.exit()
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

  function transition(tpath) {
    tpath
      .transition()
      .each("start", function() {
        d3.select(this).style("stroke", "green");
      })
      .duration(10000)
      .attrTween("stroke-dasharray", tweenDash)
      .each("end", function() {
        d3.select(this).call(transition);
      });
  }

  function tweenDash() {
    var l = this.getTotalLength(),
      i = d3.interpolateString("0," + l, l + "," + l);
    return function(t) {
      return i(t);
    };
  }

  // FLOWLINK

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

}

// Toggle children on click.
function toggle(d) {
  // 测试代码, 叶子结点无限扩展
  // if (!d.children && !d._children) {
  //   addTheseJSON = {
  //     "children": [{
  //       "name": "NFR - ercer"
  //     }, {
  //       "name": "FR - crec"
  //     }, {
  //       "name": "Granted - rc"
  //     }, {
  //       "name": "Abandoned - cee"
  //     }, {
  //       "name": "In-Process - crec"
  //     }]
  //   };
  //   var tem = tree.nodes(addTheseJSON.children).reverse();
  //   d._children = tem[0];
  // }
  // 测试代码结束
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

d3.select("svg")
  .call(d3.behavior.drag()
    .origin(function() {
      var t = d3.transform(d3.select(this).attr("transform"));
      return {
        x: t.translate[0],
        y: t.translate[1]
      };
    })
    .on("drag", dragmove));

function dragmove() {
  var x = d3.event.x;
  var y = d3.event.y;
  d3.select("svg g").attr("transform", "translate(" + x + "," + y + ")");
}

d3.select("svg")
  .call(d3.behavior.zoom()
    .scaleExtent([0.1, 3]).on("zoom", zoom));

function zoom() {
  d3.select("svg g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}


var canvas = d3.demo.canvas().width(960).height(800);
d3.select("#canvas").call(canvas);

canvas.addItem(svg);